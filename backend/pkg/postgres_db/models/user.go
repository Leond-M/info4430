package pg_models

import (
	"gorm.io/gorm"
)

type User struct {
	gorm.Model
	ID            string `gorm:"type:uuid;default:gen_random_uuid();primaryKey;unique;not null"`
	Email         string `gorm:"unique;not null"`
	Password      string `gorm:"not null"`
	FName         string `gorm:"not null;default:''"`
	LName         string `gorm:"not null;default:''"`
	Phone         string `gorm:"not null;default:''"`
	StreetAddress string `gorm:"not null;default:''"`
	City          string `gorm:"not null;default:''"`
	State         string `gorm:"not null;default:''"`
	ZipCode       string `gorm:"not null;default:''"`
	BirthDate     string `gorm:"not null;default:NOW()"`
}
