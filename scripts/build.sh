#!/bin/sh



cd frontend
pnpm install
pnpm run build

cd ..
go build -o output/server backend/main.go
cp -r frontend/dist output/