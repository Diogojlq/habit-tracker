package main

import (
	"fmt"
	"net/http"

	"github.com/Diogojlq/habit-tracker/backend/database"
	"github.com/Diogojlq/habit-tracker/backend/handlers"
	"github.com/joho/godotenv"
)

func enableCORS(next http.Handler) http.Handler {
    return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
        w.Header().Set("Access-Control-Allow-Origin", "*")
        w.Header().Set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
        w.Header().Set("Access-Control-Allow-Headers", "Content-Type, Authorization")
        if r.Method == "OPTIONS" {
            w.WriteHeader(http.StatusOK)
            return
        }
        next.ServeHTTP(w, r)
    })
}

func main() {
    godotenv.Load()
    database.Init()
    RegisterRoutes(&handlers.App{DB: database.DB})
    fmt.Println("Server running: http://localhost:8080") 
    http.ListenAndServe("127.0.0.1:8080", enableCORS(http.DefaultServeMux)) // change to ":8080" when pushing to prod
}
