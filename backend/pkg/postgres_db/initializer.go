package postgres_db

import (
	"fmt"
	pg_models "it3510/pkg/postgres_db/models"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var DB *gorm.DB

type DBInfo struct {
	Host     string
	User     string
	Password string
	Dbname   string
	Port     string
}

func ConnectToPostgres(config DBInfo) {
	// Connect to postgres
	var err error

	dsn := fmt.Sprintf("host=%s user=%s password=%s dbname=%s port=%s sslmode=disable", config.Host, config.User, config.Password, config.Dbname, config.Port)
	DB, err = gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		panic(err)
	}
}

func SyncDB() {
	DB.AutoMigrate(&pg_models.User{})
}
