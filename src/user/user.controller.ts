import { controller, httpGet } from 'inversify-express-utils';
import { Request, Response } from 'express';

@controller('/')
export class UserController {
    @httpGet('/')
    public get(req: Request, res: Response) {
        return 'home sweet home';
    }
}
