import mongoose, { Schema } from "mongoose";


const userSchema = new mongoose.Schema({
    user_email: { type: String, required: true },
    user_password: { type: String, required: true }, // password
    user_nickname : {type:String,require:true},
    
    
    accessToken : {type:String,required:false},
    refreshToken : {type:String,required:false},
    user_seq : {type:String,required:false},
    
  },
  {
    timestamps: true,
  })
  
export default mongoose.model('User', userSchema);