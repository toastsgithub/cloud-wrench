package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

const (
	PORT = ":3000"
)

func main() {
	r := gin.Default()

	r.GET("/ping", func(ctx *gin.Context) {
		ctx.JSON(http.StatusOK, gin.H{
			"message": "OK>>>",
		})
	})

	r.Run(PORT)
}
