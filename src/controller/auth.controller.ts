import * as express from 'express';
import { ControllerDefaultClass } from '../../framework/controllers/common';
import { RequestData } from '../../framework/modules/router/types';
import { RouterApiSpec } from '../../framework/modules';
import { AuthService } from '../service/';
import {alert,window}from '../util/script';
//import {validator} from "../util/validator";
declare module 'express-session' {
    export interface SessionData {
      user: string;
    }
  }
class AuthController implements ControllerDefaultClass {
    constructor() { };
    
    private authPage(api:RouterApiSpec){
        return async(req:express.Request,res:express.Response,next:express.NextFunction)=>{
            const service = new AuthService().default;
            const user = req.session.user;
            console.log(user);
            
            if(user)
                service.authorize(user);
            else
                res.redirect('/');
        }
    }

    private authorize_callback() {
        const service = new AuthService().default;
        return async (req: express.Request, res: express.Response,next:express.NextFunction) => {
            
            const code:string|undefined = String(req.query.code)||'';
            const user : string|undefined = req.session.user||"";
            //const result:any = await service.authorize(code,user);
            
            //res.render('resultChild',{data:result});
        }
    }
    private signUp(){
        const service = new AuthService().default;
        return async (req: express.Request, res: express.Response,next:express.NextFunction) => {

            const result = await service.signUp(req.body);
            
                // res.write(alert(result.status));
                res.write(window('/'));
            
            // else if (result.status==='success'){
            //     res.render('index',{Status:'signup_success'});
            // }

            // res.redirect('/');
        }
    }
    private signIn(){
        const service = new AuthService().default;
        return async (req: express.Request, res: express.Response,next:express.NextFunction) => {
            const result = await service.signIn(req.body);
            console.log(result);
            if(result.status==='success')
                req.session.user =result.user_email;  
            
            // res.write(alert(result.status));
            res.write(window('/'));
            req.session.save();

        }
    }
    private withdrawl(){
        return async (req: express.Request, res: express.Response,next:express.NextFunction) => {
            req.session.destroy((err)=>console.error(err));
            res.redirect('/');
        }
    }

    get default() {
        return {
            authPage:this.authPage,
            authorize_callback:this.authorize_callback,
            signUp:this.signUp,
            signIn:this.signIn,
            withdrawl:this.withdrawl,
        }
    }
}

export default AuthController;