<template>
    <div class="p-layout">
        <div class="p-layout_sidebar">
            <SidebarVue />
        </div>
        <div class="p-layout_main">
            <RouterView #default="{ Component }">
                <KeepAlive>
                    <component :is="Component"></component>
                </KeepAlive>
            </RouterView>
        </div>
    </div>
</template>

<script setup lang="ts">
import SidebarVue from './components/Sidebar/index.vue';
</script>

<style scoped lang="scss">
.p-layout {
    min-height: 100vh;
    display: flex;

    &_sidebar {
        flex: 0 0 250px;
    }

    :deep(.el-menu--vertical) {
        height: 100%;
    }

    &_main {
        flex: 1 1 auto;
    }
}
</style>