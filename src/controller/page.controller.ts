import * as express from 'express';
import { ControllerDefaultClass } from '../../framework/controllers/common';
import { RequestData } from '../../framework/modules/router/types';
import { RouterApiSpec } from '../../framework/modules';
import { PageService } from '../service/';
import {validator} from "../util/validator";
import * as axios from 'axios';
import createHttpError from 'http-errors';

class PageController implements ControllerDefaultClass {
    constructor() { };
    

    private searchNews(api: RouterApiSpec) {
        const service = new PageService().default;
        return async (req: express.Request, res: express.Response,next:express.NextFunction) => {
            const query:object|undefined =  req.query||'';
            const bodyType: RequestData = api.params;
            const validateResult = validator(query, bodyType);
            console.log(validateResult);
            if(validateResult){
                const json = await service.searchNews(query);
                return res.status(200).json(json.items);
            }
            next(createHttpError(404));
        }
    }



    private index(api:RouterApiSpec){
        return async (req:express.Request,res:express.Response)=>{
            res.render('index');
        }
    }
    get default() {
        return {
            searchNews: this.searchNews,
            index : this.index,
        }
    }
}

export default PageController;