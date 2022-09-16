import service from '@/utils/request';
import type { User } from './types';

export const login: User.Login.Fn = function (data) {
    return service.request({
        url: 'user/login',
        method: 'post',
        data
    });
}