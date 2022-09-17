import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig } from 'axios';
import useUserStore from '@/store/modules/user';

// 后端返回格式接口
export interface ResultData<T> {
    code: 200 | 402 | 500;
    message: string;
    data?: T;
}

class Service {
    private instance: AxiosInstance;

    constructor(config: AxiosRequestConfig) {
        this.instance = axios.create(config);

        // 请求拦截
        this.instance.interceptors.request.use(
            (config) => {
                const userStore = useUserStore();
                if (userStore.token) {
                    config.headers = {
                        token: userStore.token
                    }
                }

                return config;
            },
            (err) => {
                console.error(err);
                return Promise.reject(err);
            }
        )

        // 响应拦截
        this.instance.interceptors.response.use(
            (response) => {
                const data = response.data as ResultData<any>;
                const userStore = useUserStore();

                if (data.code !== 200) {
                    ElMessage({
                        type: 'error',
                        message: data.message
                    })

                    if (data.code === 402) {
                        userStore.resetToken();
                        location.reload();
                    }

                    return Promise.reject(new Error(data.message))
                }

                return data;
            },
            (err) => {
                console.error(err);
                return Promise.reject(err)
            }
        )
    }

    /**
     * @interface T 请求参数的interface
     * @interface U 响应结构的interface
     * @param {RequestConfig} config 
     * @returns {Promise}
    */
    request<T, U>(config: AxiosRequestConfig<T>): Promise<U> {
        return this.instance.request(config);
    }

}

let service = new Service({
    url: import.meta.env.VITE_BASE_URL,
    timeout: 15000,
});

export default service;