#!/bin/sh



cd frontend
pnpm install
pnpm run build

cd ../backend
# go build -o output/server backend/main.go

# 默认构建 Linux
GOOS=linux GOARCH=amd64 go build -o ../output/server ./main.go

cd ..
cp -r frontend/dist output/