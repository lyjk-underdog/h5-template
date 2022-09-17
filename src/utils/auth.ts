import Cookies from 'js-cookie';

const TOKEN_KEY = 'TOKEN_KEY';

export function getToken() {
    const token = Cookies.get(TOKEN_KEY);
    if (token === 'undefined') return null;
    return token;
}

export function setToken(token: string) {
    return Cookies.set(TOKEN_KEY, token);
}

export function removeToken() {
    return Cookies.remove(TOKEN_KEY);
}