import path from 'path';

//import mongoose from 'mongoose';

import Framework from '../framework';
import { ErrorBoundaryModule, RouterModule } from '../framework/modules';
import { AuthController, PageController } from './controller';
import mongoose from 'mongoose';
import './util/env';
const { MONGO_URI } = process.env;
const mongoUrl = MONGO_URI || '';

mongoose
  .connect(mongoUrl, { retryWrites: true })
  .then(() => console.log('successfully connect mongo db'))
  .catch((e: any) => { console.error(e); console.log('failed db connection') });






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