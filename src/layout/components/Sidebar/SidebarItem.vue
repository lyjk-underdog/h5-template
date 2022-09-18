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

<script setup lang="ts">
import type { SidebarItemVue } from './types';
import SidebarItemInfoVue from './SidebarItemInfo.vue';
import path from 'path-browserify';

interface Props {
    route: SidebarItemVue.Props.Route,
    defaultPath: SidebarItemVue.Props.DefaultPath
}
const props = defineProps<Props>();

const hasChilren = computed(() => {
    return !!props.route.children?.length;
})

function resolvePath(menuPath: string) {
    return path.resolve(props.defaultPath, menuPath);
}
</script>
