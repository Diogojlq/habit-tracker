package main

import (
	"fmt"
	"log"
	"net/http"
	"os"

	"github.com/joho/godotenv"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
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

var db *gorm.DB

func initDB() {
    var err error
    dsn := os.Getenv("DATABASE_URL")
    db, err = gorm.Open(postgres.Open(dsn), &gorm.Config{})
    if err != nil {
        log.Fatal("failed to connect database")
    }
    db.AutoMigrate(&User{})
}

func main() {
    godotenv.Load()
    initDB()
    RegisterRoutes()
    fmt.Println("Servidor rodando em http://localhost:8080") 
    http.ListenAndServe("127.0.0.1:8080", enableCORS(http.DefaultServeMux)) // change to ":8080" when pushing to prod
}
