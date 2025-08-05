package routes

import (
	"local/cloud-wrench/service"

	"github.com/gin-gonic/gin"
)

func RegisterUserRoutes(group *gin.RouterGroup) {
	u := service.UserService{}
	group.GET("/info", u.GetUserInfo)
}
