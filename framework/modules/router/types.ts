import { Request,Response } from "express"
import { ModuleDefaultProps } from "../types"


type ResponseData ={
    [x:string]:{
        statuscode : number,
        json:any
    }
}
type RequestData = {
    [x:string]:{
        type:string,
        description:string,
        required?:boolean,
    }
}
interface RouterHandlerParams {
    request:Request,
    response : Response,
    key:string,
    spec:RouterApiSpec,
}
interface RouterProps extends ModuleDefaultProps{
    path:string;
    routeFunctions : {[x:string]:any};
}
interface RouterApiSpec {
    method:'get'|'post';
    url:string;
    response : ResponseData,
    body?:any;
    params?:any;
    description:string;
    headers?:{
        Authorization:{
            type:string;
            required:boolean;
            description:string;
        }
    }
}

export type {RouterApiSpec,RequestData,ResponseData,RouterHandlerParams,RouterProps};