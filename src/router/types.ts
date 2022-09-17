import 'vue-router';
import type { IconClass } from '@/icons/svg/types';

declare module 'vue-router' {
    interface RouteMeta {
        icon?: IconClass;
        title?: string;
    }
}

export const enum RouteName {
    Index = 'IndexView',
    Error = 'ErrorView',
    Login = 'LoginView',
    Dashboard = 'DashboardView',
    About = 'AboutView'
}