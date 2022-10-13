import { ControllerDefaultClass } from "../../framework/controllers/common";
import { RouterApiSpec } from '../../framework/modules';
import * as express from 'express';
import FinanceService from "../service/finance.service";
class FinanceController implements ControllerDefaultClass{
    constructor(){};
    private account(){
        return async(req:express.Request,res:express.Response,next:express.NextFunction)=>{
            const service = new FinanceService().default;
            const user = req.session.user||'';
            const result = await service.domestic_account(user);
            
            res.render('/');
        }
    }


    get default(){
        return {
            account:this.account,
        }
    }
}

export default FinanceController;