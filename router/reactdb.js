const express = require("express");
const apirouter = express.Router();

const mysql = require("mysql");
const sqldb = {
    host:"nodejs-008.cafe24.com",
    user:"greensn7449",
    password:"rmflszja744",
    database:"greensn7449"
}

const contactdb = mysql.createConnection(sqldb)

apirouter.get("/",(req,res)=>{
    contactdb.query("SELECT * FROM people" , (e,r)=>{
        if(e) throw e.message;
        res.send(r)
    })
})

module.exports  = apirouter;
