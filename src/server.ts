import 'reflect-metadata';
import * as dotenv from 'dotenv';
dotenv.config();

import { Container } from 'inversify';
import { InversifyExpressServer } from 'inversify-express-utils';
import { TYPES } from './TYPES';
import { UserController } from './user/user.controller';
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';
import { AppDataSource } from './db';


const boot = async () => {
    await AppDataSource.initialize();

    const port = 3000;
    const container = new Container();

    container.bind(TYPES.UserController).to(UserController);
    container.bind(TYPES.AuthController).to(AuthController);
    container.bind(TYPES.AuthService).to(AuthService);

    const app = new InversifyExpressServer(container);
    const server = app.build();

    server.listen(port, () => {
        console.log(`Server running at http://127.0.0.1:${port}/`);
    });
};

boot();
