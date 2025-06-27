package main

import (
	"fmt"
	"net/http"
)

func main() {
    RegisterRoutes()
    fmt.Println("Servidor rodando em http://localhost:8080")
    http.ListenAndServe(":8080", nil)
}
