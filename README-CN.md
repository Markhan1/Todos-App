<p align="center">“ 教育不是学习事实，而是训练思维。”——阿尔伯特·爱因斯坦</p>

# Todos-应用程序  

这个项目是一个功能齐全的 MERN 堆栈（MongoDB、ExpressJS、ReactJS、NodeJS）。  

它使用 Firebase 身份验证功能。 

## 准备  

确保您的系统上安装了 `Node.js`： https://nodejs.org/en/download/  

并且您有一个 MongoDB Atlas 帐户连接： https://www.mongodb.com/atlas  
使用具有以下结构的现有数据集合：  
```
{
  name: "name",
  text: "text",
  status: "status",
  tags: ["tag1", "tag2"],
  date: "2022/11/01 12:00:00:000"
}
```  

您克隆存储库的文件夹是您的工作文件夹。 转到该文件夹并在那里打开一个终端。  

## 后端服务器  

转到终端中的`/server`。  

输入命令 `npm install`，它将安装所有必需的依赖项。  

然后在 `server/` 目录下创建一个名为 `config.env` 的文件，并添加所需的两个变量：`ATLAS_URI`、`PORT`。  

`ATLAS_URI` 是您的 mongodb atlas 帐户的数据库连接的 URI 链接。  

`PORT` 可以是任何你想要的端口号（推荐 5000）。  

内容将如下所示：  
```
ATLAS_URI=mongodb+srv://<username>:<password>@<cluster>.<id>.mongodb.net/?retryWrites=true&w=majority  
PORT=5000  
```  
将 `<username>`、`<password>`、`<cluster>` 和 `<id>` 替换为您自己的 Atlas 帐户值。  

## 前端服务器  

转到终端中的`/client`。  

输入命令：`npm install`，它将安装所有必需的依赖项。  

然后在 `client/` 目录下创建一个名为 `.env.local` 的文件，并在文件中写入以下内容：  
```
REACT_APP_SERVER_URI=<uri to your back-end server (http://127.0.0.1:5000)>
REACT_APP_FIREBASE_API_KEY=<api key>
REACT_APP_AUTH_DOMAIN=<auth domain>
REACT_APP_PROJECT_ID=<project id>
REACT_APP_STORAGE_BUCKET=<storage bucket>
REACT_APP_MESSAGING_SENDER_ID=<messaging id>
REACT_APP_APP_ID=<app id>
```  
当然，用您自己的 Firebase 帐户身份验证值替换这些值。 （不要保留 '<' 和 '>' ）。  

## 引发  

打开两个终端。  

第一个终端在路由`/server`，输入命令`npm run start`或`npm run devStart`，它将启动数据库服务器。  

一旦服务器运行，第二个终端在路由`/client`，输入命令`npm run start`，它将启动客户端服务器。  

注意：只有授权用户才能访问您的服务器。 因此，请确保您在 firebase 身份验证中拥有帐户（您创建并知道密码）。  

现在您都准备好了。 上帝在您身边❤️
