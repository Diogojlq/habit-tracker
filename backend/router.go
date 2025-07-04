package main

import (
	"fmt"
	"net/http"
)

func RegisterRoutes() {
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintln(w, "Welcome to Habit Tracker!")
	})
	http.HandleFunc("/habits", func(w http.ResponseWriter, r *http.Request) {
		if r.Method == http.MethodPost {
			fmt.Fprintln(w, "Habit registered!")
		}
	})
	http.HandleFunc("/user/register", RegisterUserHandler)
	http.HandleFunc("/user/authenticate", LoginHandler)
}
