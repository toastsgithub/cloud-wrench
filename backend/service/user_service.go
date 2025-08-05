package service

import "github.com/gin-gonic/gin"

type User struct {
	nickname string `json:nickname`
}
type UserService struct{}

func (u *UserService) GetUserInfo(c *gin.Context) {
	c.JSON(200, User{nickname: "Zhangsan."})
}
