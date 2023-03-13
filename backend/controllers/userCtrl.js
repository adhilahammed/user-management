const User=require('../model/user')
const expressAsyncHandler=require('express-async-handler');
const createToken = require('../config/token');
const { addListener } = require('../model/user');


const userRegistr=expressAsyncHandler(async(req,res)=>{
    console.log(req.body);   
    const userExist=await User.findOne({email:req?.body?.email})
    if(userExist) throw new Error('user already exist')
    try {
      const user=await  User.create({
        Name:req?.body?.Name,
        email:req?.body?.email,
        password:req?.body?.password  
      })   
      res.json(user)
    } catch (error) {
        res.json(error)
    }
    })
  
    const userLogin=expressAsyncHandler(async (req,res)=>{
  
      const {email,password}=req.body
      const userFound=await User.findOne({email})
      console.log(userFound);
     if(userFound && (await userFound.isPasswordMatch(password))){
      res.json({
        _id:userFound?._id,
       
        email:userFound?.email,
        isAdmin:userFound?.isAdmin,
        token:createToken(userFound?._id)
        
        
      })
     }else{
      res.status(401)
      throw new Error('invalid login credentials')
     }
    })

    const userList=expressAsyncHandler(async(req,res)=>{
      try {
        const users=await User.find()
        res.json(users)
      } catch (error) {
        res.json(error)
      }
     

    })
  
    module.exports={userRegistr,userLogin,userList}
  