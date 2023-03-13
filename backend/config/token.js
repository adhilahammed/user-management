const jwt=require('jsonwebtoken')


const createToken=id=>{
    return jwt.sign({id},'Hi I am Adhil',{expiresIn:'10d'})
}

module.exports=createToken