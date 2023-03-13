const expressAsyncHandler=require('express-async-handler')

const jwt=require('jsonwebtoken')

const User=require('../model/user')

const authMiddleware=expressAsyncHandler(async(req,res,next)=>{
    let token;
    console.log(req.headers);
    if(req?.headers?.authorization?.startsWith('Bearer')){
        try {
            token=req.headers.authorization.split(' ')[1]
            if(token){
                const decoded=jwt.verify(token,'Hi I am Adhil')
                console.log(decoded);
                //find the user by id
                const user=await User.findById(decoded?.id).select('-password')
                //attach the user to the request object
                req.user=user
                next()
            }else{
                throw new Error('there is no token attached to the header')
            }
        } catch (error) {
            throw new Error('not authorized token expired,login again')
        }
    }
})



module.exports=authMiddleware