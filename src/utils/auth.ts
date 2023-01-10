const TOKEN_KEY = 'TOKEN_KEY';

export function getToken() {
    const token = localStorage.getItem(TOKEN_KEY);
    if (token === 'undefined') return null;
    return token;
}

export function setToken(token: string) {
    return localStorage.setItem(TOKEN_KEY, token);
}

export function removeToken() {
    return localStorage.removeItem(TOKEN_KEY);
}