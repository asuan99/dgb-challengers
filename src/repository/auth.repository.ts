import db from '../models';
import { SignUpDto } from '../dto';
import {UserSchema} from '../models';

class AuthRepository {
    constructor() {}
    private async createUser(dto: SignUpDto) {
        const user = await UserSchema.create({...dto});
        return user;
    }
    private async findUserByEmail(email:string){
      return (await UserSchema.findOne({user_email:email}));
    }
    private async checkDuplicateEmail(email:string){
      return Boolean(await UserSchema.findOne({user_email:email}));
    }
    get default() {
        return {
          createUser: this.createUser,
          findUserByEmail : this.findUserByEmail,
          checkDuplicateEmail: this.checkDuplicateEmail,
        }
      }
}
export default AuthRepository;