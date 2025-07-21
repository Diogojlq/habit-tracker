package main

import (
	"fmt"
	"net/http"

	"github.com/Diogojlq/habit-tracker/backend/handlers"
)

func RegisterRoutes(app *handlers.App) {
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintln(w, "Welcome to Habit Tracker!")
	})

	http.HandleFunc("/habits", app.CreateHabitHandler)

	http.HandleFunc("/user/register", app.RegisterUserHandler)
	http.HandleFunc("/user/authenticate", app.LoginHandler)
}