import { ModuleDefaultClass } from "../modules"

interface AppProps{
    modules:Modules,
}
interface ServerProps{
    port?:number;
}
interface ExpressAppProps extends AppProps{}

type ServerType = 'express'|'koa';

type Modules = {
    router :ModuleDefaultClass;
    errorBoundary:ModuleDefaultClass;
}

export type{
    AppProps,
    ExpressAppProps,ServerType,ServerProps,Modules
}