import * as express from 'express';
import { ControllerDefaultClass } from '../../framework/controllers/common';
import { RouterApiSpec } from '../../framework/modules';
import { PageService } from '../service/';
import * as axios from 'axios';

class PageController implements ControllerDefaultClass {
    constructor() { };
    private searchNews(api: RouterApiSpec) {
        const service = new PageService().default;
        return async (req: express.Request, res: express.Response) => {
            const temp = service.searchNews('증권');
            console.log(temp);
            res.status(200).json(temp);
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