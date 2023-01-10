import 'vue-router';
import type { IconClass } from '@/icons/svg/types';

declare module 'vue-router' {
    interface RouteMeta {
        icon?: IconClass;
        title?: string;
    }

    type customRouteRecordRaw = RouteRecordRaw & {
        name: RouteRecordName,
        children?: customRouteRecordRaw[]
    }
}

export const enum RouteRecordName {
    Index = 'IndexView',
    Error = 'ErrorView',
    Login = 'LoginView',
    Home = 'HomeView',
    User = 'UserView'
}
