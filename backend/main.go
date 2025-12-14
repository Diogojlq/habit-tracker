package main

import (
	"fmt"
	"log"
	"net/http"

	"github.com/Diogojlq/habit-tracker/backend/database"
	"github.com/Diogojlq/habit-tracker/backend/handlers"
	"github.com/Diogojlq/habit-tracker/backend/router"
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
	err := godotenv.Load("../.env")
	if err != nil {
		log.Println(".en not ofund.")
	}

	dbInstance := database.Init()

	router.RegisterRoutes(&handlers.App{DB: dbInstance})

	fmt.Println("Server running: http://localhost:8080")

	log.Fatal(http.ListenAndServe(":8080", enableCORS(http.DefaultServeMux)))
}