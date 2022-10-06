import db from '../models';
import { SignUpDto } from '../dto';
const UserModel = db.User;

class AuthRepository {
    constructor() {}
    private async createUser(dto: SignUpDto) {
        const user = await UserModel.create(dto);
        return user;
      }
    get default() {
        return {
          createUser: this.createUser,
        }
      }
}
export default AuthRepository;