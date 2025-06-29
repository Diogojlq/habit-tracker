package main

import (
	"encoding/json"
	"habit-tracker/utils"
	"net/http"
)

func CreateHabitHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		http.Error(w, "Método não permitido", http.StatusMethodNotAllowed)
		return
	}
	var habit Habit
	err := json.NewDecoder(r.Body).Decode(&habit)
	if err != nil {
		http.Error(w, "Dados inválidos", http.StatusBadRequest)
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

    if err := db.Create(&user).Error; err != nil {
        http.Error(w, "Database error", http.StatusInternalServerError)
        return
    }
    w.Header().Set("Content-Type", "application/json")
    w.WriteHeader(http.StatusCreated)
    json.NewEncoder(w).Encode(map[string]string{"message": "User registered successfully!"})
}