import { defineStore } from 'pinia';
import * as userApi from '@/apis/user';
import type { UserApi } from '@/apis/user';
import { setToken, getToken, removeToken } from '@/utils/auth';

const useUserStore = defineStore('user', () => {

    const state = reactive({
        token: getToken(),
        name: '',
        avatar: ''
    })

    async function login(req: UserApi.Login.Req) {
        const res = await userApi.login(req);
        const token = res.data!;
        state.token = token;
        setToken(token);
    }

    async function getInfo() {
        const res = await userApi.Info();
        const { name, avatar } = res.data!;
        state.name = name;
        state.avatar = avatar;
    }

    function resetToken() {
        state.token = '';
        removeToken();
    }

    return {
        ...toRefs(state),
        login,
        getInfo,
        resetToken
    }
})

export default useUserStore;