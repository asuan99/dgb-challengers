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
    
    
    /**
     * @description Naver API를 이용한 뉴스 검색 함수 입니다.
     * 참고 link :  https://developers.naver.com/docs/serviceapi/search/news/news.md
     * TODO:
     * query가 들어왔는지 확인해야 합니다.
     * @returns
     */
    private searchNews(api: RouterApiSpec) {
        const service = new PageService().default;
        return async (req: express.Request, res: express.Response,next:express.NextFunction) => {
            const query:object|undefined =  req.query||'';
            const bodyType: RequestData = api.params;
            const validateResult = validator(query, bodyType);
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