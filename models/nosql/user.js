const mongoose = require("mongoose")

const UserScheme = new mongoose.Schema(
    {
        name:{
            type:String

        },
        age:{
            type:Number
        },
        email:{
            type:String,
            unique:true        
        },
        role:{
            type:["user", "admin"],
            default:"user",
        },

    },
    {
        timestamps:true, //Todo CreateAt, updateAt
        versionKey:false
    }
);

module.exports = mongoose.model("users", UserScheme)
