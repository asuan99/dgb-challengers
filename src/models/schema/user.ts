import sequelize from 'sequelize';
import {
    DataTypes,
    Model,
    Association,
} from 'sequelize';
import { v4 as uuid } from 'uuid';

interface UserAttribute{ 
    uid:string|any;
    email : string;
    nickname : string;
    password : string;
    seq_no : string;
}
module.exports = (sequelize:any,DataTypes:any) =>{
    class UserModel extends Model<UserAttribute>{
    public readonly uid! : string|any;
    public email!: string;
    public nickname !: string;
    public password !: string;
    public seq_no !: string;

    public readonly createdAt!:Date;
    public readonly updatedAt!:Date;
    static associate(models:any){

    }
}
UserModel.init({
    uid:{
        type:DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull : false,
        primaryKey:true,
    },
    email:{
        type:DataTypes.STRING,
        allowNull : false,   
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    nickname:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    seq_no:{
        type:DataTypes.STRING,
        allowNull:true,
    },

},{
    modelName : 'User',
    sequelize,
    freezeTableName : true,
    timestamps : true,
    updatedAt : 'updateTimestamp'
})
return UserModel;
}
//export default UserModel;