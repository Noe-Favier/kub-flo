package main

import (
	"io"
	"os"

	"github.com/gin-gonic/gin"
)

func main() {
	/* LOG FILE */
	gin.DisableConsoleColor()
	f, _ := os.Create("/var/user.log")
	gin.DefaultWriter = io.MultiWriter(f)
	/* -------- */

	r := gin.Default()
	r.NoRoute(func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "hello from userModule",
		})
	})

	r.Run()
}
