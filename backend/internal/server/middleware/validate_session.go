package middleware

import (
	jwt_wrapper "it3510/pkg/jwt"
	"net/http"

	"github.com/gin-gonic/gin"
)

func ValidateSession(ginCtx *gin.Context) {
	// Get token from the request
	token, err := ginCtx.Cookie("Authorization")
	if err != nil {
		ginCtx.JSON(http.StatusUnauthorized, gin.H{"message": "unauthorized"})
		ginCtx.Abort()
		return
	}

	// Validate the token
	claims, err := jwt_wrapper.ValidateToken(token)
	if err != nil {
		ginCtx.JSON(http.StatusUnauthorized, gin.H{"message": "unauthorized"})
		ginCtx.Abort()
		return
	}

	// Set the user ID in the context
	ginCtx.Set("session", claims)
	ginCtx.Next()
}
