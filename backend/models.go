package main

import "gorm.io/gorm"

type Habit struct {
	Name        string `json:"name"`
	Description string `json:"description"`
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