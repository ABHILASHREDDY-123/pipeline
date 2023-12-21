const express=require("express")
const morgan =require("morgan")
const app=express()
const PORT=8080
app.use(express.json())
app.use(morgan("tiny"))
app.get("/",(req,res)=>{
    console.log("HOME ENCOUNTERED");
    res.send("WELCOME HOME");
})
app.use("/user",(req,res)=>{
    console.log("USER ROUTER ENCOUNTERED");
     res.send("USER ROUTER ENCOUNTERED")
});
app.use("/auth",(req,res)=>{
    console.log("AUTH ROUTER ENCOUNTERED");
    res.send("AUTH ROUTER ENCOUNTERED")
});
app.use("/post",(req,res)=>{
    console.log("POST ROUTER ENCOUNTERED");
    res.send("POST ROUTER ENCOUNTERED")
});
app.listen(PORT,()=>{
    console.log("Server started")
})
