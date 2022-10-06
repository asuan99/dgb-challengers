import db from '../models';
import { SignUpDto } from '../dto';
import {UserSchema} from '../models';

class AuthRepository {
    constructor() {}
    private async createUser(dto: SignUpDto) {
      console.log({...dto});
        const user = await UserSchema.create({...dto});
        console.log(user);
        return user;
      }
    get default() {
        return {
          createUser: this.createUser,
        }
      }
}
export default AuthRepository;