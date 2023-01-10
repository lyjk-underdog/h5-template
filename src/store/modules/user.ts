import { defineStore } from 'pinia';
import * as userApi from '@/apis/user';
import type { LoginForm } from '@/apis/user';
import { setToken, getToken, removeToken } from '@/utils/auth';

const useUserStore = defineStore('user', () => {


    const token = ref(getToken());
    const name = ref('');
    const avatar = ref('');

    async function login(req: LoginForm) {
        try {
            const res = await userApi.login(req);
            const data = res.data;
            token.value = data;
            setToken(data);
        } catch (err) {
            console.error(err);
        }
    }

    async function getInfo() {
        try {
            const res = await userApi.info();
            const data = res.data;
            name.value = data.name;
            avatar.value = data.avatar;
        } catch (err) {
            console.error(err);
        }
    }

    function resetToken() {
        token.value = '';
        removeToken();
    }

    return {
        token,
        name,
        avatar,
        login,
        getInfo,
        resetToken
    }
})

export default useUserStore;