import { inject, injectable } from 'inversify';
import { TYPES } from '../TYPES';
import { User } from '../user/user.entity';

@injectable()
export class AuthService {
    async register() {
        const user = new User();
        Object.assign(user, {
            email: 'test@test.com',
            password: '123',
        });

        await user.save();

        return user;
    }
}
