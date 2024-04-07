# personal-cv

一个前后端分离的，集成前台展示、后台访问控制、日志记录的个人简历展示系统。

## 项目结构

前端为利用 pnpm workspace 搭建的 monorepo 项目，分为前台展示、后台管理两个子项目。拆分子项目的设计可以避免前后台代码混杂、必须部署在同一域名或路径下、容易暴露后台入口的问题，同时也有利于组件复用。

后端使用 Golang + Gin 框架搭建，前台通过 API 获取简历数据，后台则可以通过 API 进行日志查阅、访问控制等操作。

## 构建

### 后端

``` bash
go build
```

### 前端

1. 参考 `packages/frontend` 与 `packages/admin` 目录下的 `.env.development` 文件，在相同目录下创建 `.env.production`，将其中的环境变量修改为部署时的值
2. 修改 `packages/frontend/src/styles/fonts` 目录下的字体 CSS 文件，配置你希望在 PDF 页面使用的字体，这些字体仅用于 PDF 页面的显示，为了确保不出现布局错乱，建议将自定义字体的 `.ttf` `.woff` 等文件放置在该目录下，参考我的 CSS 配置引入 (推荐使用 fontmin 等工具压缩字体文件)

``` bash
pnpm install

# 启动前台/后台
pnpm dev
pnpm dev:admin

# 构建前台/后台/全部
pnpm build
pnpm build:admin
pnpm build:all
```
