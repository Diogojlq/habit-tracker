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