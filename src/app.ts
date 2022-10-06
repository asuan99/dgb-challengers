import path from 'path';

//import mongoose from 'mongoose';

import Framework from '../framework';
import { ErrorBoundaryModule, RouterModule } from '../framework/modules';
import { AuthController, PageController } from './controller';
import './util/env';
import db from './models';


db.sequelize.sync().then(()=>{
    console.log("DB Connect!");
}).catch((err: any)=>{
    console.error(err);
})



const framework = new Framework({
    serverProps: {
        port: 3000,
    },
    appProps: {
        modules: {
            router: new RouterModule({
                path: path.join(process.cwd(),'/api.json'), routeFunctions: {
                    ...(new PageController()).default,
                    ...(new AuthController()).default,
                }
            }),
            errorBoundary: new ErrorBoundaryModule(),
        }
    }
});
framework.run();