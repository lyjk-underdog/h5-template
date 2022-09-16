import type { ResultData } from '@/utils/request';

export namespace User {
    export namespace Login {
        export type Req = {
            username: string,
            password: string
        }
        export type Res = Promise<ResultData<string>>
        export type Fn = (req: Req) => Res
    }
}