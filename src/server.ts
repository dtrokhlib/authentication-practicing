import 'reflect-metadata';
import { Container } from 'inversify';
import { InversifyExpressServer } from 'inversify-express-utils';
import { TYPES } from './TYPES';
import { UserController } from './user/user.controller';

const boot = async () => {
    const port = 3000;
    const container = new Container();
    container.bind(TYPES.UserController).to(UserController);

    const app = new InversifyExpressServer(container);
    const server = app.build();

    server.listen(port, () => {
        console.log(`Server running at http://127.0.0.1:${port}/`);
    });
};

boot();
