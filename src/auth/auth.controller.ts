import { controller, httpPost } from 'inversify-express-utils';

@controller('/auth')
export class AuthController {
    @httpPost('/register')
    register() {}

    @httpPost('/login')
    login() {}
}
