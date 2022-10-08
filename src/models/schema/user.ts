import mongoose, { Schema } from "mongoose";


const userSchema = new mongoose.Schema({
    user_email: { type: String, required: true },
    user_password: { type: String, required: true }, // password
    
    
    user_accessToken : {type:String,required:false},
    user_refreshToken : {type:String,required:false},
    user_seqNo : {type:String,required:false},
    
  },
  {
    timestamps: true,
  })
  
export default mongoose.model('User', userSchema);