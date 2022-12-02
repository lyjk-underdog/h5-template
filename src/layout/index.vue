<template>
    <div class="p-layout">
        <div class="p-layout_header">
            <NavbarVue />
        </div>

        <div class="p-layout_body">
            <div class="p-layout_sidebar">
                <SidebarVue />
            </div>

            <div class="p-layout_main">
                <div class="p-layout_breadcrumb">
                    <BreadcrumbVue />
                </div>


                <div class="p-layout_content">
                    <RouterView #default="{ Component }">
                        <KeepAlive>
                            <component :is="Component"></component>
                        </KeepAlive>
                    </RouterView>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import SidebarVue from './components/Sidebar/index.vue';
import NavbarVue from './components/Navbar/index.vue';
import BreadcrumbVue from './components/Breadcrumb.vue';
</script>

<style scoped lang="scss">
.p-layout {
    min-height: 100vh;
    display: flex;
    flex-direction: column;

    &_header {
        flex: 0 0 auto;
    }

    &_body {
        display: flex;
        flex: 1 1 auto;
    }

    &_sidebar {
        padding: 0 20px;
        flex: 0 0 250px;
    }

    &_main {
        flex: 1 1 auto;
        background: #F7F6FA;
        display: flex;
        flex-direction: column;
        padding: 0 40px;
    }

    &_breadcrumb {
        flex: 0 0 40px;
        display: flex;
        align-items: center;
    }

    &_content {
        flex: 1 1 auto;
    }

    :deep(.el-menu--vertical) {
        height: 100%;
    }
}
</style>