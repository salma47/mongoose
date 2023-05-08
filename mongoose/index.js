const express=require("express")
const port=5555
const app=express()
const {reouterpost}=require('./server/routers/router')
app.use(express.json())
app.use('/',reouterpost)
app.listen(port,()=>{
    console.log(`server runing on http://localhost:${port}`)
})