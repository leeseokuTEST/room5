const express = require("express");
const app = express();
const PORT = 8002;
const reactdb = require("./router/reactdb")

app.get("/",(req,res)=>{res.sendFile(__dirname+"/public/index.html")})
app.use("/dbinfo", reactdb);
//그외 모든 라우터 처리 제일 아래에 위치
app.use((req,res)=>{res.sendFile(__dirname+"/public/nopage.html")})
app.listen(PORT,()=>{console.log("정상구동")})
