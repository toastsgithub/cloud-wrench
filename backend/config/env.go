package config

import "os"

func Env() string {
	return os.Getenv("GO_ENV")
}

func IsDev() bool {
	return os.Getenv("GO_ENV") == "dev"
}
