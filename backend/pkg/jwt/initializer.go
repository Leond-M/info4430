package jwt_wrapper

import (
	"errors"
	"fmt"
	"it3510/pkg/logger"
	"time"

	"github.com/golang-jwt/jwt/v5"
)

var jwtKey []byte

func InitializeJWT(key string) {
	jwtKey = []byte(key)
}

type UserClaims struct {
	Id    uint   `json:"id"`
	Email string `json:"email"`
}

func CreateNewUserToken(user UserClaims) (string, error) {
	// Create a new token object, specifying signing method and the claims
	// you would like it to contain.
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
		"id":    user.Id,
		"email": user.Email,
		"exp":   time.Now().Add(time.Hour * 24).Unix(),
	})

	// Sign and get the complete encoded token as a string using the secret
	if len(jwtKey) == 0 {
		return "", errors.New("JWT key not initialized")
	}

	tokenString, err := token.SignedString(jwtKey)
	if err != nil {
		return "", err
	}

	return tokenString, nil

}

func ValidateToken(tokenString string) (UserClaims, error) {
	// Parse takes the token string and a function for looking up the key. The latter is especially
	// useful if you use multiple keys for your application.  The standard is to use 'kid' in the
	// head of the token to identify which key to use, but the parsed token (head and claims) is provided
	// to the callback, providing flexibility.
	token, err := jwt.Parse(tokenString, func(token *jwt.Token) (interface{}, error) {
		// Don't forget to validate the alg is what you expect:
		if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
			logger.Err("Unexpected signing method: %v", token.Header["alg"])
			return nil, fmt.Errorf("Unexpected signing method: %v", token.Header["alg"])
		}

		// hmacSampleSecret is a []byte containing your secret, e.g. []byte("my_secret_key")
		return jwtKey, nil
	})
	if err != nil {
		logger.Err("Error validating token: %s", err)
		return UserClaims{}, err
	}

	if claims, ok := token.Claims.(jwt.MapClaims); ok {
		//check expiration
		if int64(claims["exp"].(float64)) < time.Now().Unix() {
			logger.Err("Token expired")
			return UserClaims{}, errors.New("Token expired")
		}

		//check sub
		if _, ok := claims["id"]; !ok {
			logger.Err("No sub in claims")
			return UserClaims{}, errors.New("No sub in claims")
		} else if _, ok := claims["email"]; !ok {
			logger.Err("No email in claims")
			return UserClaims{}, errors.New("No email in claims")
		}

		//return claims
		return UserClaims{
			Id:    uint(claims["id"].(float64)),
			Email: claims["email"].(string),
		}, nil

	} else {
		logger.Err("Error parsing claims")
		return UserClaims{}, errors.New("Error parsing claims")
	}
}
