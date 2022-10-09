import axios from 'axios';
import bcrypt from 'bcrypt';
import QueryString from 'qs';
import { SignUpDto ,SignInDto} from '../dto';
import { AuthRepository } from '../repository';



class AuthService {
    constructor() { }
    private async authorize(code:string,user:string) {
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
        const dto = {
            'accessToken':json.data.access_token,
            'refreshToken':json.data.refresh_token,
            'user_seq':json.data.user_seq_no,
        }
        const repository = new AuthRepository().default;
        repository.createToken(user,dto);
        

        return json.data;
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