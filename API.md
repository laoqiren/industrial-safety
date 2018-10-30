# API 文档

## 个人中心

在全局模板里挂载用户信息：

```js
{isLogin: "是否登陆", username: "用户名", role: "用户角色"}
```

登陆注册：

```js
{username: "用户名", password: "密码"}
```

## 任务管理

**get /api/task/ 任务列表**

返回值示例：
```js
{success: true, data: []}
```

**put /api/task 添加任务**

请求数据示例：
```js
{"单位名称": "xxx", "核查人员": "xxxx", "设备": []}
```

返回值示例：
```js
{success: true, msg: "添加成功", "任务编号": 'xxx'}
```

**delete /api/task 删除任务**
请求数据示例：
```js
{"任务编号": "编号"}
```

返回值示例：
```js
{success: true, msg: "删除成功"}
```

**post /api/task 修改任务**

## 设备管理
**get /api/equipment/:Equipment type 指定设备类型的设备列表**

设备类型如：SCADA PLC DCS

返回值示例：
```js
{success: true, data: []}
```

**put /api/equipment 添加设备**

请求数据示例：
```js
{"number": "编号", "设备名称": "xxxx", "品牌": "xxxx", "设备类型": "xxxx"}
```

返回值示例：
```js
{success: true, msg: "添加成功"}
```

**delete /api/equipment 删除设备**
请求数据示例：
```js
{"number": "编号", "设备类型": "xxxx"}
```

返回值示例：
```js
{success: true, msg: "删除成功"}
```

**post /api/equipment 修改设备**

## 历史记录

**get /api/history 历史记录列表**

查询字符参数：`filter=xxx`查询方式如企业、地理位置、设备类型、风险等级