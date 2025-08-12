package main

import (
	"fmt"
	"local/cloud-wrench/config"
	"local/cloud-wrench/routes"
	"net/http"
	"os"
	"path/filepath"
	"strconv"
	"strings"

	"github.com/gin-gonic/gin"
)

const (
	DEFAULT_PORT = ":3000"
)

func main() {
	r := gin.Default()

	r.GET("/ping", func(ctx *gin.Context) {
		ctx.JSON(http.StatusOK, gin.H{
			"message": "OK>>>",
		})
	})

	routes.RegisterUserRoutes(r.Group("/user"))

	r.NoRoute(func(ctx *gin.Context) {

		staticRoot := "./dist"
		if config.IsDev() {
			staticRoot = "../frontend/dist"
		}
		staticRootAbs, err := filepath.Abs(staticRoot)
		if err != nil {
			panic("invalid static root: " + err.Error())
		}

		// 处理 query string（例如 /user/123?foo=1）
		requestPath := strings.Split(ctx.Request.URL.Path, "?")[0]
		cleanPath := filepath.Clean("/" + requestPath) // 防止 ../../ 形式
		fmt.Println(requestPath, cleanPath)

		absPath := filepath.Join(staticRootAbs, cleanPath)

		// 如果请求的是实际文件（例如 JS、CSS、图标等），则尝试返回它
		if fileExists(absPath) {
			ctx.File(absPath)
			return
		}

		// 否则 fallback 到 index.html（SPA 路由由前端接管）
		ctx.File(filepath.Join(staticRoot, "index.html"))
	})

	portNum, err := strconv.Atoi(os.Getenv("SERVER_PORT"))
	port := DEFAULT_PORT
	if err == nil {
		port = fmt.Sprintf(":%d", portNum)
	}
	r.Run(port)
}

func fileExists(path string) bool {
	info, err := os.Stat(path)
	return err == nil && !info.IsDir()
}
