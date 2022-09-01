import express, { Express, Request, Response } from 'express';
import { injectable } from 'inversify';

@injectable()
export class App {
    private instance: Express;

    constructor() {
        this.instance = express();
    }

    private set() {}

    private use() {}

    private middleware() {}

    private routes() {
        this.instance.use('/', (req: Request, res: Response) => {
            res.send('HELLO');
        });
    }

    startup() {
        this.routes();

        return this.instance;
    }
}
