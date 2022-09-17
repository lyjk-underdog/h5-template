import router from './router';
import { RouteName } from './router/types';
import useUserStore from './store/modules/user';
import Nprogress from 'nprogress';
import 'nprogress/nprogress.css';

const whitelist = [RouteName.Login];

router.beforeEach(async (to, from) => {
    const userStore = useUserStore();

    Nprogress.start();

    if (userStore.token) {
        if (to.name === RouteName.Login) {
            return { name: RouteName.Index };
        }

        if (!userStore.name) await userStore.getInfo();
        return true;

    } else {
        if (whitelist.includes(to.name as RouteName)) {
            return true;
        }

        return { name: RouteName.Login, query: { redirect: to.name as RouteName } };
    }
})

router.afterEach(() => {
    Nprogress.done();
})