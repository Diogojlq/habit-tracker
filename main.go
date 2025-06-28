package main

import (
	"fmt"
	"net/http"
    "gorm.io/gorm"
    "gorm.io/driver/postgres"
    "log"
)

var db *gorm.DB

func initDB() {
    var err error
    dsn := "host=localhost user=postgres password=password dbname=habittracker port=5432 sslmode=disable"
    db, err = gorm.Open(postgres.Open(dsn), &gorm.Config{})
    if err != nil {
        log.Fatal("failed to connect database")
    }
    db.AutoMigrate(&User{})
}

func main() {
    initDB()
    RegisterRoutes()
    fmt.Println("Servidor rodando em http://localhost:8080") 
    http.ListenAndServe("127.0.0.1:8080", nil) // change to ":8080" when pushing to prod
}
