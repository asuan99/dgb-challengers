import { UserSchema } from "../models";
class FinanceRepository{
    constructor(){};
    private async getToken(email:string){
        const token = UserSchema.findOne({user_email:email},{_id:0,accessToken:1,user_seq:1});
        return token;
    }
    get default(){
        return {
            getToken:this.getToken,
        }
    }
}

export default FinanceRepository;