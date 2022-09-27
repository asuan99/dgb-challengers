import { Express } from "express";
import { ModuleDefaultClass } from "../common";
import { LogOption } from "./types";

class LoggerModule implements ModuleDefaultClass{
    protected static _options : LogOption;
    protected static styles : any;
    public init(app: Express, args?: any): void {
        
    }
    constructor(){};
    static set options(options:LogOption){
        LoggerModule._options = options;
    }
    static setStyle(styles:any){
        this.styles = styles.join(';')+';';
    }
    static printLog(message:string){
        switch(LoggerModule._options.level){
            case 'warn':
                return console.warn(`%c${message}`,"color:yellow"+this.styles);
            case 'error':
                return console.error(`%c${message}`,"color:red"+this.styles);
            case 'debug':
                return console.debug(`%c${message}`,this.styles);
            defualt:
                return console.log(`%c${message}`,this.styles);
        }
    }
}

export {LoggerModule};