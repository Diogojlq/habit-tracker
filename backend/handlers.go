package main

import (
	"encoding/json"
	"net/http"

	"github.com/Diogojlq/habit-tracker/backend/database"
	"github.com/Diogojlq/habit-tracker/backend/utils"
)

func CreateHabitHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		return
	}
	var habit Habit
	err := json.NewDecoder(r.Body).Decode(&habit)
	if err != nil {
		http.Error(w, "Invalid data", http.StatusBadRequest)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusCreated)
	json.NewEncoder(w).Encode(habit)
}

func RegisterUserHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		return
	}

	var user User
    err := json.NewDecoder(r.Body).Decode(&user)
    if err != nil {
        http.Error(w, "Invalid data", http.StatusBadRequest)
        return
    }

	if !utils.IsValidEmail(user.Email) {
		http.Error(w, "Invalid email address", http.StatusBadRequest)
		return
	}

	hashedPassword, err := utils.GenerateHashPassword(user.Password)
	if err != nil {
		http.Error(w, "Error hashing password", http.StatusInternalServerError)
		return
	}
	user.Password = hashedPassword

    if err := database.DB.Create(&user).Error; err != nil {
        http.Error(w, "Database error", http.StatusInternalServerError)
        return
    }
    w.Header().Set("Content-Type", "application/json")
    w.WriteHeader(http.StatusCreated)
    json.NewEncoder(w).Encode(map[string]string{"message": "User registered successfully!"})
}

func LoginHandler(w http.ResponseWriter, r *http.Request) {
    if r.Method != http.MethodPost {
        http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
        return
    }

    var req LoginRequest
    if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
        http.Error(w, "Invalid data", http.StatusBadRequest)
        return
    }

    var user User
    if err := database.DB.Where("email = ?", req.Email).First(&user).Error; err != nil {
        http.Error(w, "Invalid email or password", http.StatusUnauthorized)
        return
    }

    if !utils.CheckPasswordHash(req.Password, user.Password) {
        http.Error(w, "Invalid email or password", http.StatusUnauthorized)
        return
    }

    token, err := utils.GenerateJWT(user.ID)
    if err != nil {
        http.Error(w, "Could not generate token", http.StatusInternalServerError)
        return
    }

    w.Header().Set("Content-Type", "application/json")
    json.NewEncoder(w).Encode(LoginResponse{Token: token})
}