package main

import (
	"flag"
	"it3510/internal/server/controllers"
	"it3510/internal/server/middleware"
	"it3510/pkg/initializers"
	jwt_wrapper "it3510/pkg/jwt"
	"it3510/pkg/logger"
	"it3510/pkg/postgres_db"
	"log"
	"os"

	"github.com/gin-gonic/gin"
)

func init() {
	logger.State("Initializing server")
	initializers.LoadEnvVariables()
	postgres_db.ConnectToPostgres(postgres_db.DBInfo{
		Host:     os.Getenv("POSTGRES_HOST"),
		User:     os.Getenv("POSTGRES_USER"),
		Password: os.Getenv("POSTGRES_PASSWORD"),
		Dbname:   os.Getenv("POSTGRES_DB"),
		Port:     os.Getenv("POSTGRES_PORT"),
	})
	postgres_db.SyncDB()
	jwt_wrapper.InitializeJWT(os.Getenv("JWT_SECRET"))
}

func main() {

	// flag for the command line
	port := flag.String("p", os.Getenv("HTTP_PORT"), "port to serve on")
	flag.Parse() // parse the flags, if not, the flags will not be used

	//gin
	router := gin.Default()
	router.Use(middleware.CORSMiddleware())
	router.GET("/", handleRoot)
	router.GET("/ping", handlePing)

	//auth
	router.POST("/auth/signup", controllers.Signup)
	router.POST("/auth/login", controllers.Login)
	router.DELETE("/auth/session", controllers.Logout)
	router.GET("/auth/session", middleware.ValidateSession, controllers.RefreshSession)


	//logs
	logger.Log("Starting server on : %s", *port)

	log.Fatal(router.Run("0.0.0.0:" + *port))

}

// Path: /
func handleRoot(ginCtx *gin.Context) {
	/* 	tmpl := template.Must(template.ParseFiles("index.html"))
	   	tmpl.Execute(w, nil) */
	ginCtx.String(200, "Hello World")
}

// Path: /ping
func handlePing(ginContext *gin.Context) {
	ginContext.String(200, "pong")
}
