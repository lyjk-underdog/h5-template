import axios, { AxiosError } from 'axios';
import type { AxiosRequestConfig } from 'axios';
import useUserStore from '@/store/modules/user';
import { showDialog } from 'vant';

// 后端返回格式接口
export interface Result {
    code: 200 | 402 | 500;
    message: string;
}


const service = axios.create({
    url: import.meta.env.VITE_BASE_URL,
    timeout: 15000,
})

service.interceptors.request.use(
    (config) => {
        const userStore = useUserStore();
        if (userStore.token) {
            config.headers = {
                token: userStore.token
            }
        }

        return config;
    }
)

export async function request<T>(config: AxiosRequestConfig): Promise<Result & T> {
    try {
        const response = await service.request(config);
        const data = response.data as Result & T;
        const userStore = useUserStore();

        if (data.code !== 200) {
            if (data.code === 402) {
                userStore.resetToken();
                location.reload();
            }

            throw new AxiosError(data.message, undefined, config, undefined, response)
        }

        return data;
    } catch (err) {
        showDialog({
            title: '错误',
            message: (err as Error).message
        })

        throw err;
    }
}
