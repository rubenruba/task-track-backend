import cors from 'cors';
import 'dotenv/config';
import express, { Application, NextFunction, Request, Response } from 'express';
import Mongo from './services/Mongo';
import indexRouter from './routes';

export class App {
    public app: Application;
    private port: number;
    public mongo: Mongo;

    constructor(port: number) {
        this.port = port;

        this.mongo = new Mongo(process.env.MONGO_CLUSTER_CONNECTION ?? '');
        this.mongo.init();

        this.app = express();
        
        this.initializeMiddlewares();
        this.listen();
    }
    
    initializeMiddlewares() {
        this.app.use(express.json());
        this.app.use(cors({ origin: "https://task-track-frontend.vercel.app/" }));
        this.app.use(this.loggerMiddleware);
        this.app.use(indexRouter); // Add the application router
    }

    // Middleware function to see the request method and url
    loggerMiddleware(req: Request, res: Response, next: NextFunction) {
        console.log(`${req.method} ${req.path}`);
        next();
    }

    listen() {
        this.app.listen(this.port, () => console.log(`App listening in port ${this.port}...`));
    }
}

new App(Number(process.env.PORT) || 8080);