import { inject } from 'inversify';
import { controller, httpPost } from 'inversify-express-utils';
import { TYPES } from '../TYPES';
import { AuthService } from './auth.service';

@controller('/auth')
export class AuthController {
    constructor(@inject(TYPES.AuthService) private authService: AuthService) {}

    @httpPost('/register')
    register() {
        return this.authService.register();
    }

    @httpPost('/login')
    login() {}
}
