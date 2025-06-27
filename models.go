package main

type Habit struct {
	Name        string `json:"name"`
	Description string `json:"description"`
}

type User struct {
	Username string `json:"username"`
	Email    string `json:"email"`
	Password string `json:"password"`
}