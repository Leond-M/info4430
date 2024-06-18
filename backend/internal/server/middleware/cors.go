package middleware

import "github.com/gin-gonic/gin"


//list of allowed origins
var allowedOrigins map[string]bool= map[string]bool{
	"http://localhost:3000": true, 
	"https://front-info4430.molineros.org": true,
}


//CORSMiddleware is a middleware that allows CORS requests
func CORSMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		if origin := c.GetHeader("Origin"); allowedOrigins[origin] {
			c.Writer.Header().Set("Access-Control-Allow-Origin", origin)
		} else {
			//c.AbortWithStatus(403)
		}

		c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")
		c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With")
		c.Writer.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS, GET, PUT, DELETE")

		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(204)
			return
		}

		c.Next()
	}
}
