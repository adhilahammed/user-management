const express=require('express')
const  db = require('./config/config')
require('dotenv').config()

const cors=require('cors')
const userRouter = require('./routes/user')



const app=express()  
const PORT=5000

app.use(cors())  
db()  
  
app.use(express.json())  

app.listen(PORT,()=>{
    console.log(`server connected to ${PORT}`)  
})

   
app.use('/api/user',userRouter)    

