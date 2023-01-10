import { request } from '@/utils/request';

export interface LoginForm {
    username: string;
    password: string;
}

export interface UserInfo {
    name: string;
    avatar: string;
}

export function login(form: LoginForm) {
    return request<{ data: string }>({
        url: '/mock/user/login',
        method: 'POST',
        data: form
    })
}

export function info() {
    return request<{ data: UserInfo }>({
        url: '/mock/user/info',
        method: 'GET'
    })
}
