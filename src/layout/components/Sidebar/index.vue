<template>
    <ElMenu class="c-sidebar" router :default-active="$route.path">
        <SidebarItemVue v-for="(route, index) in menuRoute.children" :key="index" :route="route"
            :default-path="menuRoute.path" />
    </ElMenu>
</template>

<script setup lang="ts">
import SidebarItemVue from './SidebarItem.vue';
import { menuRoute } from '@/router';
</script>

<style lang="scss" scoped>
.c-sidebar {
    --el-menu-bg-color: #fff;
    --el-menu-text-color: #666666;
    --el-menu-active-color: #fff;
    --el-menu-hover-bg-color: #F6F6F8;
    

    border: none;
    overflow: hidden;

    :deep(.el-menu) {
        overflow: hidden;
    }

    :deep(.el-menu-item.is-active) {
        background: linear-gradient(90deg, #2A77FF 0%, #5592FE 100%);
    }

    :deep(.el-menu-item) {
        border-radius: 4px;
        margin: 6px 0;
    }

    :deep(.el-sub-menu__title) {
        border-radius: 4px;
        margin: 6px 0 0 0;
    }

}
</style>
