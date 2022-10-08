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
            const data:any = await service.authorize(code);
            res.render('resultChild',{data:data});
        }
    }
    private signUp(){
        const service = new AuthService().default;
        return async (req: express.Request, res: express.Response,next:express.NextFunction) => {
            const result = await service.signUp(req.body);
            

            res.redirect('/');
        }
    }
    private signIn(){
        const service = new AuthService().default;
        return async (req: express.Request, res: express.Response,next:express.NextFunction) => {
            const result = await service.signIn(req.body);
            if(result.status==='success')
                req.session.id !=result.user_email;
            res.redirect('/');
        }
    }




    get default() {
        return {
            authPage:this.authPage,
            authorize: this.authorize,
            authorize_callback:this.authorize_callback,
            signUp:this.signUp,
            signIn:this.signIn,
        }
    }
}

export default AuthController;