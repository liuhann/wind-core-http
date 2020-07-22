# wind-core-http
基于koa的模块化应用下，系统级通用中间件注册模块

## 中间件列表

- kcors
- koa-router
- koa-body
- koa-static


## 相关配置参数


```javascript
const config = {
  cors: {
    credentials: true
  },
  uploadStorage: '../upload_storage',
  uploadQuota: 50 * 1024 * 1024,
  public: './public',
  api: '/api'
}
```

 * uploadStorage： 上传文件位置  默认为 ./upload_storage
 * uploadQuota： 上传文件大小限额 默认为 50M
 * public： 静态资源托管
 * api：  实例化router位置 默认为/api

