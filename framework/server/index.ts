#!/usr/bin/env node

import http from 'http';
import * as express from 'express';
import { ServerProps } from './types';
class Server{
    private _server : any = null;
    constructor({}:ServerProps){}
    get server(){
        return this._server;
    }
    init(app:express.Express){
        const port = normalizePort(process.env.PORT || '3000');
        app.set('port',port);
        const server = http.createServer(app);
        server.on('error',onError);
        server.on('listening',onListening);


        function normalizePort(val: any) {
            var port = parseInt(val, 10);
          
            if (isNaN(port)) {
              // named pipe
              return val;
            }
          
            if (port >= 0) {
              // port number
              return port;
            }
          
            return false;
          }
          function onError(error:any){
            if(error.syscall !=='listen')
                throw error;
            var bind = typeof port ==='string'?
                'Pipe' + port : 'Port' +port;
            switch(error.code){
                case 'EACCES':
                    console.error(bind+' requires elevated privileges');
                    process.exit(1);
                    break;
                case 'EADDRINUSE':
                    console.error(bind+'is already in use');
                    process.exit(1);
                    break;
                default:
                    throw error;
            }
          }
          function onListening(){
            const addr = server.address();
            if(addr){
                const bind = typeof port ==='string'?
                'Pipe' + port : 'Port' +port;
                console.log('Listeneing on ' + bind);
            }
          }
          server.listen(port||3000);
          return server;
    }
}
export type{ServerProps};
export default Server;