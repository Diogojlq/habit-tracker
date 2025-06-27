package main

import (
	"fmt"
	"net/http"
)

func main() {
    RegisterRoutes()
    fmt.Println("Servidor rodando em http://localhost:8080")
    http.ListenAndServe("127.0.0.1:8080", nil)
}
