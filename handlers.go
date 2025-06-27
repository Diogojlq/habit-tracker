package main

import (
	"encoding/json"
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
