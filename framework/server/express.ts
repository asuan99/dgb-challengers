import cookieParser from 'cookie-parser';
import express from 'express'
import logger from 'morgan'
import path from 'path'

class ExpressApp{
    private readonly _instance: express.Express;
    constructor(){
        this._instance = this.init();
    }
    get instance(){
        return this._instance;
    }
    init(){
        const app =express();
        app.set('view engine','ejs');
        app.use(logger('dev'));
        app.use(express.json());
        app.use(express.urlencoded({extended:false}));
        app.use(cookieParser());
        
        app.set('views', path.join(process.cwd(), '/src/public/views'));
        app.use(express.static(path.join(process.cwd(),'/src/public')));
        return app;
    }
}

export default new ExpressApp();