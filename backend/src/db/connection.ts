const mongoose = require('mongoose')
// import mongoose from "mongoose"

const dbConnection = () =>{
    mongoose.connect('mongodb://localhost:27017/users')
    .then(()=>{
        console.log("connection successfull")
    })
    .catch((err:any)=>{
        console.log(err)
    });
}

export default dbConnection