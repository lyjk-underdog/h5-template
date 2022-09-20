import router from './router';
import { RouteRecordName } from './router/types';
import useUserStore from './store/modules/user';
import Nprogress from 'nprogress';
import 'nprogress/nprogress.css';

const whitelist = [RouteRecordName.Login];

router.beforeEach(async (to, from) => {
    const userStore = useUserStore();

    Nprogress.start();

    if (userStore.token) {
        if (to.name === RouteRecordName.Login) {
            return { name: RouteRecordName.Index };
        }

        if (!userStore.name) await userStore.getInfo();
        return true;

    } else {
        if (whitelist.includes(to.name as RouteRecordName)) {
            return true;
        }

        return { name: RouteRecordName.Login, query: { redirect: to.name as RouteRecordName } };
    }
})

router.afterEach(() => {
    Nprogress.done();
})