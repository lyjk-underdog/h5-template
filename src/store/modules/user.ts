import { defineStore } from 'pinia';
import * as userApi from '@/apis/user';
import type { User } from '@/apis/user/types';
import { setToken, getToken, removeToken } from '@/utils/auth';

const useUserStore = defineStore('user', () => {

    const state = reactive({
        token: getToken()
    })

    async function login(req: User.Login.Req) {
        const { data } = await userApi.login(req);
        state.token = data;
        setToken(data);
    }

    function resetToken() {
        state.token = '';
        removeToken();
    }

    return {
        ...toRefs(state),
        login,
        resetToken
    }
})

export default useUserStore;