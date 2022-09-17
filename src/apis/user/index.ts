import service from '@/utils/request';
import type { UserApi } from './types';

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
        method: 'get'
    })
}