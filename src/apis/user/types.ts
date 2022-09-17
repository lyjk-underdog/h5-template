import type { ResultData } from '@/utils/request';

export namespace UserApi {
    export namespace Login {
        export type Req = {
            username: string,
            password: string
        }
        export type Res = ResultData<string>
        export type Fn = (req: Req) => Promise<Res>
    }

    export namespace Info {
        export type Res = ResultData<{
            name: string,
            avatar: string
        }>
        export type Fn = () => Promise<Res>
    }
}