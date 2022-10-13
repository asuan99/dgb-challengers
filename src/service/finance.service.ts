import { FinanceRepository } from "../repository";
import axios from 'axios';
class FinanceService{
    private async account(email:string){
        const repository = new FinanceRepository().default;
        const token = await repository.getToken(email);
        console.log(token);
        const header = {
            'Authorization':'Bearer '+token?.accessToken
        }
        const param = {
            'user_seq_no':token?.user_seq
        }
        const json = await axios.get('https://testapi.openbanking.or.kr/v2.0/user/me',
        {headers:header,params:param})
        const use_list = json.data.res_list.map((temp:any) =>temp.fintech_use_num);
        console.log(use_list);
        //List들이 넘어옴.
        //fintech_use_num 을 통해서 잔액조회등 가능
        //은행거래고유번호는 process.env.ORGANIZATIONID + U + 난수 9자리
        return json;
    }
    private async transaction(list:string){
        
    }
    get default(){
        return {    
            account:this.account,
        }
    }
}

export default FinanceService;