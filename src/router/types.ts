import 'vue-router';
import type { IconClass } from '@/icons/svg/types';

declare module 'vue-router' {
    interface RouteMeta {
        icon?: IconClass;
        title?: string;
    }
}