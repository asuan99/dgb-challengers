import { FinanceRepository } from "../repository";
import axios from 'axios';
class FinanceService{
    private async overseas_account(email:string){
        const repository = new FinanceRepository().default;
        const token = await repository.getToken(email);
        
        const headers : any = {
            'authorization' : `Bearer ${token?.accessToken}`,
            'Content-Type': 'application/json; charset=utf-8',
            'appkey' : process.env.FINANCIAL_CLIENT_KEY,
            'appsecret' : process.env.FINANCIAL_SECRET_KEY,
            'tr_id' : 'VTTT3012R',
        };
        const params = {
            'CANO' : '50073685',
            'ACNT_PRDT_CD': '01',
            'OVRS_EXCG_CD' : "NASD",
            'TR_CRCY_CD' : 'USD',
            'CTX_AREA_FK200' : "",
            'CTX_AREA_NK200' : "",
        }
        try{
        const result = await axios.get('https://openapivts.koreainvestment.com:29443/uapi/overseas-stock/v1/trading/inquire-balance',
        {headers:headers,params:params});
        console.log((result.data.output1));
        }
        catch(err){console.error(err);}
        
    }

    private async transaction(list:string){
        
    }
    get default(){
        return {    
            domestic_account:this.domestic_account
        }
    }
}

export default FinanceService;