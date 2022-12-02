import service from '@/utils/request';
import type { ResultData } from '@/utils/request';

// types
export namespace UserApi {
    export namespace Login {
        export type Req = {
            username: string,
            password: string
        }
        export type Res = ResultData<string>
        export type Fn = (req: Req) => Promise<Res>
    }

    export namespace Info {
        export type Res = ResultData<{
            name: string,
            avatar: string
        }>
        export type Fn = () => Promise<Res>
    }
}


export const login: UserApi.Login.Fn = function (data) {
    return service.request({
        url: '/user/login',
        method: 'post',
        data
    });
}

export const Info: UserApi.Info.Fn = function () {
    return service.request({
        url: '/user/info',
        method: 'get',
    })
}