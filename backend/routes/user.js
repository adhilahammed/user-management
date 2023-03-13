const express=require('express')
const { userRegistr, userLogin, userList } = require('../controllers/userCtrl')
const authMiddleware = require('../middleware/authMiddleware')

const userRouter=express.Router()

userRouter.post('/register',userRegistr)
userRouter.post('/',userLogin)   
userRouter.get('/list',authMiddleware,userList)   



module.exports=userRouter
