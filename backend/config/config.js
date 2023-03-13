const mongoose=require('mongoose')

const config=async()=>{
 try {
   await mongoose.connect('mongodb://localhost:27017/bangalore',
   ()=>{
    console.log('database connected successfully');
   })
 } catch (error) {
    console.log('not connected');
 }
    

}

module.exports= config;     

//BRiq0uiHXOwvhRri