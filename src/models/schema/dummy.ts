import mongoose, { Schema } from "mongoose";


const dummySchema = new mongoose.Schema({

    user_name : {type:String,required:false},
    account : {type:Array,required:false},

    
  },
  {
    timestamps: true,
  })
  
export default mongoose.model('Dummy', dummySchema);