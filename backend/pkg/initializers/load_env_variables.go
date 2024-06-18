package initializers

import (
	"it3510/pkg/logger"

	"github.com/joho/godotenv"
)

func LoadEnvVariables() {
	// .env file
	err := godotenv.Load()
	if err != nil {
		logger.Fatal("Error loading .env file")
	}
}
