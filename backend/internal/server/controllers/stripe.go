package controllers

import (
	jwt_wrapper "it3510/pkg/jwt"
	"it3510/pkg/logger"
	local_stripe "it3510/pkg/stripe"
	"net/http"
	"strconv"
	"strings"

	"github.com/gin-gonic/gin"
)

func CreatePaymentIntent(ginCtx *gin.Context) {
	var body struct {
		Price       string `json:"price"`
		VehicleType string `json:"vehicle_type"`
		Id          string `json:"id"`
		StartDate   string `json:"start_date"`
		EndDate     string `json:"end_date"`
	}

	if err := ginCtx.BindJSON(&body); err != nil {
		logger.Log("Error binding json: %s", err.Error())
		ginCtx.JSON(http.StatusBadRequest, gin.H{"error": "bad request"})
		return
	}

	//convert price to float
	withoutComma := strings.ReplaceAll(body.Price, ",", "")
	numericPrice, err := strconv.ParseFloat(withoutComma, 64)
	if err != nil {
		logger.Log("Error parsing price: %s", err.Error())
		ginCtx.JSON(http.StatusBadRequest, gin.H{"error": "bad request"})
		return
	}

	clientSecret, err := local_stripe.HandlePaymentIntent(numericPrice)
	if err != nil {
		ginCtx.JSON(http.StatusInternalServerError, gin.H{"error": "internal server error"})
		return
	}

	claims, ok := ginCtx.Get("session")
	if !ok {
		ginCtx.JSON(401, gin.H{"error": "unauthorized"})
		return
	}

	//find the listing
	for i, listing := range ListingMutexes.Listings[body.VehicleType] {
		if listing.Id == body.Id {
			ListingMutexes.Listings[body.VehicleType][i].RentStartDateTime = body.StartDate
			ListingMutexes.Listings[body.VehicleType][i].RentEndDateTime = body.EndDate
			ListingMutexes.Listings[body.VehicleType][i].RenterId = claims.(jwt_wrapper.UserClaims).Id
			break
		}
	}

	ginCtx.JSON(http.StatusOK, gin.H{"client_secret": clientSecret})
}
