import { CalcDto } from "../dto";
import { CalcSchema } from "../models";
class CalcRepository{
    constructor(){};
    private async createCalc(dto:CalcDto){
        const calc = await CalcSchema.create({...dto});
        return calc;
    }
    get default(){
        return {
             createCalc : this.createCalc,
        }
    }
}

export default CalcRepository;