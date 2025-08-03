
## Project structure
cloud-wrench/
├── backend/              # 后端核心逻辑
│   ├── handler/          # gin 路由绑定 + 控制器
│   ├── service/          # 业务逻辑处理层
│   ├── model/            # 数据模型（结构体定义）
│   ├── repo/             # 数据访问层（DB/Redis等）
│   ├── config/           # 配置加载
│   ├── main.go           # 启动入口（main.go 所在）
│   └── middleware/       # gin 中间件
├── frontend/             # 前端源码（如 React/Vue）
│   └── ...
├── public/               # 构建后的前端资源（dist，静态部署）
│   └── index.html
├── go.mod
└── README.md


## Dev

FE runs on port 3000
BE runs on port 3001

Dev access localhost:3000 to get FE templates and request apis on 3001

CAUTION: Node 17.4.0+ is required to run vite.

## Prod

The FE is built into a bunch of html/js/css assets, put them on public/static dir,

and the Backend handle all request NOT starts with /api, and route them to static files.
