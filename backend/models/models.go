package models

import (
	"gorm.io/gorm"
)

type Habit struct {
    ID        uint      `gorm:"primaryKey" json:"id"`
    Name      string    `json:"name"`                    
    Daily     bool      `json:"daily"`          
    DaysOfWeek []string `gorm:"type:text[]" json:"days_of_week,omitempty"`
}

type User struct {
    gorm.Model
    Username string
    Email    string
    Password string
}

type LoginRequest struct {
    Email    string `json:"email"`
    Password string `json:"password"`
}

type LoginResponse struct {
    Token string `json:"token"`
}