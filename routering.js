const express = require("express")
const app = express()
const navRouter = require("./routers/nav")
const path = require("path")

//middlewares
app.use(express.static(path.join(__dirname,"")))

//navbar
app.use("/",(req,res,next)=>{
    // res.locals.navbar = 'components/navbar';
    next();
})

//routers
app.use("/",navRouter)

//start
app.listen(5000,()=>{
    console.log("Listening to 5000..")
})
