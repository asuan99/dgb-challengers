import { FinanceRepository } from "../repository";
import axios from 'axios';
import { StockDto } from "../dto";
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
        return result.data.output1;
        }
        catch(err){console.error(err);}
        
    }
    private async domestic_account(email:string){
        /**
         * @description domestic_account 함수 입니다.
         */

        const repository = new FinanceRepository().default;
        const token = await repository.getToken(email);
        const headers : any = {
            'authorization' : `Bearer ${token?.accessToken}`,
            'Content-Type': 'application/json; charset=utf-8',
            'appkey' : process.env.FINANCIAL_CLIENT_KEY,
            'appsecret' : process.env.FINANCIAL_SECRET_KEY,
            'tr_id' : 'VTTC8434R',
        };
        const params = {
            'CANO' : '50073685',
            'ACNT_PRDT_CD': '01',
            'OFL_YN' : "N",
            'AFHR_FLPR_YN':"N",
            'INQR_DVSN':2,
            'UNPR_DVSN':1,
            'FUND_STTL_ICLD_YN':'N',
            'PRCS_DVSNFNCG_AMT_AUTO_RDPT_YN' : '01',
            'FNCG_AMT_AUTO_RDPT_YN' : 'N',
            'CTX_AREA_FK100' : "",
            'CTX_AREA_NK100' : "",
            'PRCS_DVSN':'01'
        }
        try{
            const result = await axios.get('https://openapivts.koreainvestment.com:29443/uapi/domestic-stock/v1/trading/inquire-balance',
            {headers:headers,params:params});
            return result.data.output1;
            }
            catch(err){console.error(err);}
    }
    private async account(email:string){
        const domestic_account = await this.domestic_account(email)
        const overseas_account = await this.overseas_account(email)
        
        
        let StockList:StockDto[] = [];
        let total_price:number = 0;
        for (const price of domestic_account){
            total_price += Number(price.pchs_amt)
        }
        for (const price of overseas_account){
            total_price += Number(price.pchs_avg_pric)
        }
        // for (const stock of domestic_account){
        //     const json:StockDto = {
        //         code : 'k',
        //         pdno : stock.pdno,         //번호
        //         name : stock.prdt_name,        //이름
        //         evlu_pfls_rt : stock.evlu_pfls_rt,   //수익률
        //         pchs_amt : stock.pchs_amt,      //구매금액
        //         evlu_amt : stock.evlu_amt       // 현재금액(평가금액)
        //     }
        //     StockList.push(json);
        // }
        // for (const stock of overseas_account){
        //     const json:StockDto={
        //         code : 'u',
        //         pdno : stock.ovrs_pdno,
        //         name : stock.ovrs_item_name,
        //         evlu_pfls_rt : stock.evlu_pfls_rt,
        //         pchs_amt : stock.pchs_avg_pric,
        //         evlu_amt : stock.frcr_evlu_pfls_amt,
        //     }
        //     StockList.push(json);
        // }
        // console.log(StockList[0]);
        // return StockList;
    }
    get default(){
        return {    
            domestic_account:this.domestic_account,
            overseas_account:this.overseas_account,
            account : this.account,
        }
    }
}

export default FinanceService;