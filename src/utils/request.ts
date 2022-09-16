import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig } from 'axios';
import useUserStore from '@/store/modules/user';


// 后端返回格式接口
export interface ResultData<T> {
    code: '200' | '500';
    message: string;
    data: T;
}

// 错误处理
const errHandler = {
    '500'(message: ResultData<any>['message']) {
        ElMessage({
            type: 'error',
            message
        });
    }
}

class Service {
    private instance: AxiosInstance;

    constructor(config: AxiosRequestConfig) {
        this.instance = axios.create(config);

        // 请求拦截
        this.instance.interceptors.request.use(
            (config) => {
                config.headers = {}
                
                

                return config;
            },
            (err) => {
                return Promise.reject(err)
            }
        )

        // 响应拦截
        this.instance.interceptors.response.use(
            (response) => {
                const data = response.data as ResultData<any>;

                if (data.code !== '200') errHandler[data.code](data.message);

                return data;
            },
            (err) => {
                ElMessage({
                    type: 'error',
                    message: err
                });
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
    url: import.meta.env.VITE_APP_BASE_URL,
    timeout: 15000,
});

export default service;