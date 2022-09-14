import type { Component } from 'vue';
import 'vue-router';

declare module 'vue-router' {
    interface RouteMeta {
        icon?: Component;
        title?: string;
    }
}