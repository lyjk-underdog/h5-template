import type { MockMethod } from 'vite-plugin-mock';
import type { UserApi } from '../src/apis/user/types';

export default [
    {
        url: '/user/login',
        method: 'post',
        response({ body: { username, password } }: { body: UserApi.Login.Req }): UserApi.Login.Res {
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
    },

    {
        url: '/user/info',
        method: 'get',
        response({ headers: {token} }: { headers: { token: string } }): UserApi.Info.Res {
            console.log(token);
            
            if (token === 'user token') {
                return {
                    code: 200,
                    message: 'ok',
                    data: {
                        name: 'lyjk',
                        avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80'
                    }
                }
            }

            return {
                code: 402,
                message: '登录已过期，请重新登录!'
            }
        }
    }
] as MockMethod[]