<template>
    <div class="p-layout">
        <div class="p-layout_header">
            <VanNavBar :title="curRoute.meta.title" />
        </div>

        <div class="p-layout_body">
            <RouterView #default="{ Component }">
                <KeepAlive>
                    <component :is="Component"></component>
                </KeepAlive>
            </RouterView>
        </div>

        <div class="p-layout_footer">
            <VanTabbar route>
                <VanTabbarItem v-for="(route, index) in menuRoute.children" :key="index"
                    :to="path.resolve(menuRoute.path, route.path)">
                    <span>{{ route.meta?.title }}</span>
                    <template #icon>
                        <SvgIcon :icon-class="route.meta?.icon"></SvgIcon>
                    </template>
                </VanTabbarItem>
            </VanTabbar>
        </div>
    </div>
</template>

<script setup lang="ts">
import { menuRoute } from '@/router'
import path from 'path-browserify';

const curRoute = useRoute();

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
        overflow: hidden;
        flex: 1 1 auto;
    }

    &_footer {
        flex: 0 0 auto;
    }
}
</style>