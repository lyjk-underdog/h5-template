import type { MockMethod } from 'vite-plugin-mock';

export default [
    {
        url: '/mock/user/login',
        method: 'post',
        response(opt: any) {

            const { username, password } = opt.body;

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
        url: '/mock/user/info',
        method: 'get',
        response(opt: any) {
            const { token } = opt.headers;            

            if (token === 'user token') {
                return {
                    code: 200,
                    message: 'ok',
                    data: {
                        name: '楼沅金坤',
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