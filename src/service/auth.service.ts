import axios from 'axios';

import createHttpError from 'http-errors';
import QueryString from 'qs';
import request from 'request';



class AuthService {
    constructor() { }
    private async authorize(code:string) {
        const redirect_uri = `http://localhost:${process.env.PORT}/financial/auth/callback`
        const data = {
            'code':code,
            'client_id': process.env.FINANCIAL_CLIENT_KEY,
            'redirect_uri': redirect_uri,
            'grant_type':'authorization_code',
            'client_secret': process.env.FINANCIAL_SECRET_KEY,
        }
        const header = {
            'content-Type':'application/x-www-form-urlencoded'
        }
        const json = await axios.post("https://testapi.openbanking.or.kr/oauth/2.0/token",QueryString.stringify(data),{
            headers:header
        })
        return json.data;
        
        // const token = await axios.post('https://testapi.openbanking.or.kr/oauth/2.0/token',
        //     data,{headers:header})
        //console.log(token); 
    }

    get default() {
        return {
            authorize: this.authorize,
        }
    }

}

export default AuthService;