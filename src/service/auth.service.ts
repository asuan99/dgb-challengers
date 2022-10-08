import axios from 'axios';
import bcrypt from 'bcrypt';
import QueryString from 'qs';
import { SignUpDto ,SignInDto} from '../dto';
import { AuthRepository } from '../repository';



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
    }
    private async signUp(dto:SignUpDto){
        const repository = new AuthRepository().default;

        if (await repository.checkDuplicateEmail(dto.uesr_email)) {
            return {status:'duplicated'};
        }
        const hashedPassword = await bcrypt.hash(dto.user_password, 10);
        const user = await repository.createUser({...dto,user_password : hashedPassword});
        console.log(user);
        if(!user) return {status:'fail'};
        return {status :'success'};


        return user;
    }
    private async login(dto:SignInDto){
        const repository = new AuthRepository().default;
        
        
    }
    get default() {
        return {
            authorize: this.authorize,
            signUp : this.signUp,
            login : this.login,
        }
    }

}

export default AuthService;