<template>
    <ElIcon>
        <component :is="props.icon"></component>
    </ElIcon>
    <span>{{props.title}}</span>
</template>

<script setup lang="ts">
import type { SidebarItemInfo } from '@/layout/types';

interface Props {
    icon?: SidebarItemInfo.Props.Icon,
    title?: SidebarItemInfo.Props.Title
}
const props = defineProps<Props>();
</script>
