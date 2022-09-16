import type { MockMethod } from 'vite-plugin-mock';
import type { User } from '../src/apis/user/types';

export default [
    {
        url: '/user/login',
        method: 'post',
        response({ body: { username, password } }: { body: User.Login.Req }) {

            if (username === 'user' && password === '123') {
                return {
                    code: 200,
                    message: 'ok',
                    data: 'user token'
                }
            }

            return {
                code: 500,
                message: '密码错误'
            }
        }
    }
] as MockMethod[]