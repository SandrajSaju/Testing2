const express=require("express")
const app=express()

app.get("/",(req,res)=>{
    res.send("Hello GIT 3000!!!")
})
app.get("/admin",(req,res)=>{
    res.send("Hello Admin Added")
})

app.get("/login",(req,res)=>{
    res.send("This is Login Page")
})

app.listen(3000,()=>{
    console.log("Listening on port 3000");
})