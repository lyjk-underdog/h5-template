<template>
    <ElMenuItem v-if="!hasChilren" :index="resolvePath(props.route.path)">
        <SidebarItemInfoVue :icon="props.route.meta?.icon" :title="props.route.meta?.title" />
    </ElMenuItem>

    <ElSubMenu v-else :index="resolvePath(props.route.path)">
        <template #title>
            <SidebarItemInfoVue :icon="props.route.meta?.icon" :title="props.route.meta?.title" />
        </template>

        <SidebarItem v-for="(route , index) in props.route.children" :key="index" :route="route"
            :defaultPath="resolvePath(props.route.path)" />
    </ElSubMenu>
</template>

<script lang="ts">
import type { RouteRecordRaw } from 'vue-router';

export namespace Props {
    export type Route = RouteRecordRaw;
    export type DefaultPath = string;
}
</script>

<script setup lang="ts">
import SidebarItemInfoVue from './SidebarItemInfo.vue';
import path from 'path-browserify';

const props = defineProps<{
    route: Props.Route,
    defaultPath: Props.DefaultPath
}>();

const hasChilren = computed(() => {
    return !!props.route.children?.length;
})

function resolvePath(menuPath: string) {
    return path.resolve(props.defaultPath, menuPath);
}
</script>
