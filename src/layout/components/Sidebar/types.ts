import type { IconClass } from '@/icons/svg/types';
import type { RouteRecordRaw } from 'vue-router';

export namespace SidebarItemInfo {
    export namespace Props {
        export type Icon = IconClass;
        export type Title = string;
    }
}

export namespace SidebarItem {
    export namespace Props {
        export type Route = RouteRecordRaw;
        export type DefaultPath = string;
    }
}
