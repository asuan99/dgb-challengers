import * as express from 'express';
import { RouterApiSpec } from './router/types';

abstract class ModuleDefaultClass{
    public abstract init(app:express.Express,args?:any):void
}

export {ModuleDefaultClass}