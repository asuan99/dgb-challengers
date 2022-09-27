import { ModuleDefaultClass } from "../common";
import * as express from 'express';
import createError, {HttpError} from 'http-errors';

class ErrorBoundaryModule implements ModuleDefaultClass{
    constructor(){};
    public init(app: express.Express, args?: any): void {
        app.use((req,res,next)=>{
            next(createError(404));
            res.status(200).json({error:'Not Found'});
        })
        app.use((err:HttpError,req:express.Request,res:express.Response,next:express.NextFunction)=>{
            res.locals.message = err.message;
            res.locals.error = req.app.get('env')==='dev'?err:{};
        })
    }
}

export {ErrorBoundaryModule};