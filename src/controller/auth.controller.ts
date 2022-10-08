import * as express from 'express';
import { ControllerDefaultClass } from '../../framework/controllers/common';
import { RequestData } from '../../framework/modules/router/types';
import { RouterApiSpec } from '../../framework/modules';
import { AuthService } from '../service/';
import {validator} from "../util/validator";
import * as axios from 'axios';
import createHttpError from 'http-errors';
declare module 'express-session' {
    export interface SessionData {
      user: string;
    }
  }
class AuthController implements ControllerDefaultClass {
    constructor() { };
    
    private authPage(api:RouterApiSpec){
        return async(req:express.Request,res:express.Response,next:express.NextFunction)=>{
            //req.session.destroy((err)=>console.error(err));
            const id  = req.session.user;
            console.log(id);
            let content;
            if(req.session.user){
                /* 리얼 쿠키값에 저장된 아이디를 뷰에서 사용할 수 있도록 함 : session-id값에 맞는 아이디를 줄 수 있도록 설계를 해야겠지 원래는?  */
                /* 리얼 쿠키가 있을 때 로그인 정보가 나옴(sid에 맞는 리얼 cookie에 저장된 값) */
                content = `<h1>${req.session.user} 님 안녕하세요.</h1>`;
              }
           
            res.send(content);
          
            //res.render('auth',{id:id});
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
                req.session.user =result.user_email;
                
                req.session.save(
                    ()=>{
                        res.redirect('/');
                    }
                );
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