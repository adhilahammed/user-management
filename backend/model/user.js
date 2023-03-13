const mongoose = require("mongoose");
const bcrypt=require('bcryptjs')
//create schema
const userSchema = new mongoose.Schema(
  {
   Name:{
type:String,
required: [true, "Name is required"],
   },
    email: {
      type: String,
      required: [true, "Email is required"],
    },
   
    password: {
      type: String,
      required: [true, "Hei buddy Password is required"],  
    },
  
    isAdmin: {
      type: Boolean,
      default: true,
    },
}
);


userSchema.pre('save',async function(next){
   const salt=await bcrypt.genSalt(10)
    this.password=await bcrypt.hash(this.password,salt)
   next()
})

userSchema.methods.isPasswordMatch=async function(enteredpassword){
 return await bcrypt.compare(enteredpassword,this.password)
}
const User = mongoose.model("user", userSchema);

module.exports = User;