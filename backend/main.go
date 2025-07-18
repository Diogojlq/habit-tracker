package main

import (
	"fmt"
	"net/http"

	"github.com/joho/godotenv"
    "github.com/Diogojlq/habit-tracker/backend/database"
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
    database.Init()
    godotenv.Load()
    RegisterRoutes()
    fmt.Println("Server running: http://localhost:8080") 
    http.ListenAndServe("127.0.0.1:8080", enableCORS(http.DefaultServeMux)) // change to ":8080" when pushing to prod
}
