import mongoose, { Schema } from "mongoose";


const userSchema = new mongoose.Schema({
    user_email: { type: String, required: true },
    user_password: { type: String, required: true }, // password
    
    
  },
  {
    timestamps: true,
  })
  
export default mongoose.model('User', userSchema);