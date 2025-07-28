package handlers

import (
	"bytes"
	"encoding/json"
	"errors"
	"net/http"
	"net/http/httptest"
	"testing"

	"github.com/Diogojlq/habit-tracker/backend/models"
	"github.com/Diogojlq/habit-tracker/backend/utils"
	"gorm.io/gorm"
)

type FakeDB struct {
	CreateUser func(user *models.User) error
	FindUserByEmail func(email string, user *models.User) error
}

type DBInterface interface {
	Create(value interface{}) *gorm.DB
	Where(query string, args ...interface{}) *gorm.DB
}

func (f *FakeDB) Create(value interface{}) *gorm.DB {
	user := value.(*models.User)
	err := f.CreateUser(user)
	return fakeResult(err)
}

func (f *FakeDB) Where(query string, args ...interface{}) *gorm.DB {
	email := args[0].(string)
	var user models.User
	err := f.FindUserByEmail(email, &user)
	return &gorm.DB{Error: err, Statement: &gorm.Statement{Dest: &user}}
}

func fakeResult(err error) *gorm.DB {
	return &gorm.DB{Error: err}
}

func TestCreateHabitHandler(t *testing.T) {
	app := &App{}
	habit := models.Habit{
		Name: "Study Go",
	}
	body, err := json.Marshal(habit)
	if err != nil {
		t.Fatal("Erro ao gerar JSON: %v", err)
	}
	req := httptest.NewRequest(http.MethodPost, "/habits", bytes.NewBuffer(body))
	rec := httptest.NewRecorder()

	app.CreateHabitHandler(rec, req)

	if rec.Code != http.StatusCreated {
		t.Errorf("Status code: %d", rec.Code)
	}

	var res models.Habit
	err = json.NewDecoder(rec.Body).Decode(&res)
	if err != nil || res.Name != habit.Name {
		t.Errorf("Awaited habit %q, received %+v", habit.Name, res)
	}
}

func TestRegisterUserHandler(t *testing.T) {
	fakeDB := &FakeDB{
		CreateUser: func(user *models.User) error {
			user.ID = 1
			return nil
		},
	}
	app := &App{DB: fakeDB}

	user := models.User{
		Username: "Diogo",
		Email:    "diogo@example.com",
		Password: "12345678abc",
	}
	body, _ := json.Marshal(user)
	req := httptest.NewRequest(http.MethodPost, "/register", bytes.NewBuffer(body))
	rec := httptest.NewRecorder()

	app.RegisterUserHandler(rec, req)

	if rec.Code != http.StatusCreated {
		t.Errorf("esperava status 201, obteve %d", rec.Code)
	}
}

func TestLoginHandler(t *testing.T) {
	hashed, _ := utils.GenerateHashPassword("12345678")

	fakeDB := &FakeDB{
		FindUserByEmail: func(email string, user *models.User) error {
			if email != "diogo@example.com" {
				return errors.New("not found")
			}
			*user = models.User{
				ID:       1,
				Email:    email,
				Password: hashed,
			}
			return nil
		},
	}

	app := &App{DB: fakeDB}

	reqBody := models.LoginRequest{
		Email:    "diogo@example.com",
		Password: "12345678",
	}
	body, _ := json.Marshal(reqBody)
	req := httptest.NewRequest(http.MethodPost, "/login", bytes.NewBuffer(body))
	rec := httptest.NewRecorder()

	app.LoginHandler(rec, req)

	if rec.Code != http.StatusOK {
		t.Errorf("esperava status 200, obteve %d", rec.Code)
	}

	var res models.LoginResponse
	_ = json.NewDecoder(rec.Body).Decode(&res)
	if res.Token == "" {
		t.Error("esperava token JWT válido, mas resposta está vazia")
	}
}
