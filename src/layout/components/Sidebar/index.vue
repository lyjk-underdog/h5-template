<template>
    <ElMenu router :background-color="variables.menuBg" :text-color="variables.menuText" :default-active="$route.path">
        <SidebarItemVue v-for="(route , index) in menuRoute.children" :key="index" :route="route"
            :default-path="menuRoute.path" />
    </ElMenu>
</template>

<script setup lang="ts">
import SidebarItemVue from './SidebarItem.vue';
import { menuRoute } from '@/router';
import variables from '@/styles/variables';
</script>
