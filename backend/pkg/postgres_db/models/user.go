package pg_models

import "gorm.io/gorm"

type User struct {
	gorm.Model
	ID       uint   `gorm:"primaryKey;unique;not null"`
	Email    string `gorm:"unique;not null"`
	Password string `gorm:"not null"`
}
