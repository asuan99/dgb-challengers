import * as express from 'express';
import { ControllerDefaultClass } from '../../framework/controllers/common';
import { RequestData } from '../../framework/modules/router/types';
import { RouterApiSpec } from '../../framework/modules';
import { AuthService } from '../service/';
import {validator} from "../util/validator";
import * as axios from 'axios';
import createHttpError from 'http-errors';

class AuthController implements ControllerDefaultClass {
    constructor() { };
    
    private authPage(api:RouterApiSpec){
        return async(req:express.Request,res:express.Response,next:express.NextFunction)=>{
            res.render('auth');
        }
    }

    private authorize(api: RouterApiSpec) {
        const service = new AuthService().default;
        return async (req: express.Request, res: express.Response,next:express.NextFunction) => {
            
            // const json:any = await service.authorize();
            
            // res.render(json);
            // next(createHttpError(404));
        }
    }
    private authorize_callback() {
        const service = new AuthService().default;
        return async (req: express.Request, res: express.Response,next:express.NextFunction) => {
            const code:string|undefined = String(req.query.code)||'';
            const json:any = await service.authorize(code);
              
        }
    }




    get default() {
        return {
            authPage:this.authPage,
            authorize: this.authorize,
            authorize_callback:this.authorize_callback,
        }
    }
}

export default AuthController;