import cookieParser from 'cookie-parser';
import express from 'express'
import logger from 'morgan'
import path from 'path'
import session from 'express-session'
import MongoDB from 'connect-mongodb-session';
import '../util/env';
const { MONGO_URI } = process.env;

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
        
        const MongoDBStore = MongoDB(session);
        const mongoUrl = MONGO_URI || '';
        const store = new MongoDBStore({
            uri : mongoUrl,
            collection : 'sessions',
        })

        app.use(session({secret:process.env.SESSION_SECRET_KEY||'default session key',
            resave:false,saveUninitialized:false,store:store
    }))
        app.set('views', path.join(process.cwd(), '/src/public/views'));
        app.use(express.static(path.join(process.cwd(),'/src/public')));
        return app;
    }
}

export default new ExpressApp();