import mongoose, { Schema } from "mongoose";



const calcSchema = new mongoose.Schema({

    

    target_month_revenue : {type:Number,require:true},      // 목표 월 수익
    annual_earn_rate : {type:Number,require:true},         //연간 수익률
    month_payment : {type:Number,require:true},         //월 납입액
    payment_period : {type:Number,require:true},
    system_asset : {type:Number,require:true},         //시스템 자산
    achieve_year : {type:Number,require:true},      //달성 년수

    current_price : {type:Number,require:true},     //현재 모은 금액
    remain_retire : {type:Number,require:true},     //은퇴까지 잔여 기간


  },
  {
    timestamps: true,
  })
  
export default mongoose.model('Calc', calcSchema);