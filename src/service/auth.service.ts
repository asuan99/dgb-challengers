import axios from 'axios';
import bcrypt from 'bcrypt';
import QueryString from 'qs';
import { SignUpDto ,SignInDto} from '../dto';
import { AuthRepository } from '../repository';



class AuthService {
    constructor() { }
    private async authorize(user:string) {
        const repository = new AuthRepository().default;
        const body = {
            "grant_type": "client_credentials",
            "appkey": process.env.FINANCIAL_CLIENT_KEY,
            "appsecret":  process.env.FINANCIAL_SECRET_KEY
          }
        const data = await (await axios.post('https://openapivts.koreainvestment.com:29443/oauth2/tokenP',body)).data;
        
        const dto = {
            'accessToken':data.access_token
        }
        try{
        const result = await repository.createToken(user,dto);
        console.log(result);
        }
        catch(e){
            console.error(e);
        }
        //return json.data;
    }

    private async signUp(dto:SignUpDto){
        const repository = new AuthRepository().default;
        if (await repository.checkDuplicateEmail(dto.uesr_email)) {
            return {status:'duplicated'};
        }
        const hashedPassword = await bcrypt.hash(dto.user_password, 10);
        const user = await repository.createUser({...dto,user_password : hashedPassword});

        if(!user) return {status:'fail'};
        return {status :'success',email:user.user_email};


    }
    private async signIn(dto: SignInDto) {
        const repository = new AuthRepository().default;
    
        const user = await repository.findUserByEmail(dto.user_email);
    
        if (!user) {
          return { status: 'nouser' };
        }
        const isEqual = await bcrypt.compare(dto.user_password, user.user_password);
        
        if (!isEqual) {
          return { status: 'fail'};
        }
        return { status: 'success', user_email:user.user_email };
      }
    get default() {
        return {
            authorize: this.authorize,
            signUp : this.signUp,
            signIn : this.signIn,
        }
    }

}

export default AuthService;