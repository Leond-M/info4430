package controllers

import (
	jwt_wrapper "it3510/pkg/jwt"
	"it3510/pkg/postgres_db"
	pg_models "it3510/pkg/postgres_db/models"
	"net/http"

	"github.com/gin-gonic/gin"
	"golang.org/x/crypto/bcrypt"
)

func Signup(ginCtx *gin.Context) {

	//Get email and password from the request
	var body struct {
		Email    string `json:"email"`
		Password string `json:"password"`
	}

	if ginCtx.BindJSON(&body) != nil {
		ginCtx.JSON(http.StatusBadRequest, gin.H{"error": "bad request"})
		return
	}

	//validate email and password
	if body.Email == "" || body.Password == "" {
		ginCtx.JSON(http.StatusBadRequest, gin.H{"error": "bad request"})
		return
	} else if len(body.Password) < 6 {
		ginCtx.JSON(http.StatusBadRequest, gin.H{"error": "password too short"})
		return
	} else if len(body.Email) < 3 {
		ginCtx.JSON(http.StatusBadRequest, gin.H{"error": "email too short"})
		return
	} else if len(body.Email) > 254 {
		ginCtx.JSON(http.StatusBadRequest, gin.H{"error": "email too long"})
		return
	} else if len(body.Password) > 254 {
		ginCtx.JSON(http.StatusBadRequest, gin.H{"error": "password too long"})
		return
	}

	//TODO: check if the email is already in the database

	//hash the password
	hash, err := bcrypt.GenerateFromPassword([]byte(body.Password), bcrypt.DefaultCost)
	if err != nil {
		ginCtx.JSON(http.StatusInternalServerError, gin.H{"error": "internal server error"})
		return
	}

	//create user
	user := pg_models.User{
		Email:    body.Email,
		Password: string(hash),
	}

	result := postgres_db.DB.Create(&user)
	if result.Error != nil {
		ginCtx.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to create user"})
		return
	}

	// Create a new token
	token, err := jwt_wrapper.CreateNewUserToken(jwt_wrapper.UserClaims{
		Id:    user.ID,
		Email: user.Email,
	})
	if err != nil {
		ginCtx.JSON(http.StatusInternalServerError, gin.H{"error": "Token creation failed"})
		return
	}

	// Return the token
	ginCtx.SetSameSite(http.SameSiteLaxMode)
	ginCtx.SetCookie("Authorization", token, 3600*24, "/", "", false, true)
	ginCtx.JSON(http.StatusOK, gin.H{"email": user.Email, "token": token})

}

func Login(ginCtx *gin.Context) {
	// Get email and password from the request

	var body struct {
		Email    string `json:"email"`
		Password string `json:"password"`
	}

	if ginCtx.BindJSON(&body) != nil {
		ginCtx.JSON(http.StatusBadRequest, gin.H{"error": "bad request"})
		return
	}

	// Validate email and password
	if body.Email == "" || body.Password == "" {
		ginCtx.JSON(http.StatusBadRequest, gin.H{"error": "bad request"})
		return
	} else if len(body.Password) > 254 {
		ginCtx.JSON(http.StatusBadRequest, gin.H{"error": "password too long"})
		return
	} else if len(body.Email) > 254 {
		ginCtx.JSON(http.StatusBadRequest, gin.H{"error": "email too long"})
		return
	}

	// Get user from the database
	var user pg_models.User
	postgres_db.DB.First(&user, "email = ?", body.Email)

	if user.ID == "" {
		ginCtx.JSON(http.StatusBadRequest, gin.H{"error": "Invalid email or password"})
		return
	}

	// Compare the password
	err := bcrypt.CompareHashAndPassword([]byte(user.Password), []byte(body.Password))
	if err != nil {
		ginCtx.JSON(http.StatusBadRequest, gin.H{"error": "Invalid email or password"})
		return
	}

	// Create a new token
	token, err := jwt_wrapper.CreateNewUserToken(jwt_wrapper.UserClaims{
		Id:    user.ID,
		Email: user.Email,
	})
	if err != nil {
		ginCtx.JSON(http.StatusInternalServerError, gin.H{"error": "Token creation failed"})
		return
	}

	// Return the token
	ginCtx.SetSameSite(http.SameSiteLaxMode)
	ginCtx.SetCookie("Authorization", token, 3600*24, "/", "", false, true)
	ginCtx.JSON(http.StatusOK, gin.H{"email": user.Email, "token": token})

}

func Logout(ginCtx *gin.Context) {
	ginCtx.SetCookie("Authorization", "", -1, "/", "", false, true)
	ginCtx.JSON(http.StatusOK, gin.H{})
}

func RefreshSession(ginCtx *gin.Context) {
	claims, ok := ginCtx.Get("session")
	if !ok {
		ginCtx.JSON(http.StatusUnauthorized, gin.H{"message": "unauthorized"})
		return
	}

	token, err := ginCtx.Cookie("Authorization")
	if err != nil {
		ginCtx.JSON(http.StatusUnauthorized, gin.H{"message": "unauthorized"})
		return
	}

	ginCtx.JSON(http.StatusOK, gin.H{"email": claims.(jwt_wrapper.UserClaims).Email, "token": token})
}
