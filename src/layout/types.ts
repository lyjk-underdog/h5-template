import type { Component } from "vue"
import type { RouteRecordRaw } from 'vue-router';

export namespace SidebarItemInfo {
    export namespace Props {
        export type Icon = Component;
        export type Title = string;
    }
}

export namespace SidebarItem {
    export namespace Props {
        export type Route = RouteRecordRaw;
        export type DefaultPath = string;
    }
}
