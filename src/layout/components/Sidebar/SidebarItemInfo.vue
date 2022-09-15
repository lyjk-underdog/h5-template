<template>
    <SvgIcon class="l-svg-icon" :icon-class="props.icon"></SvgIcon>

    <span>{{props.title}}</span>
</template>

<script setup lang="ts">
import type { SidebarItemInfo } from './types';

interface Props {
    icon?: SidebarItemInfo.Props.Icon,
    title?: SidebarItemInfo.Props.Title
}
const props = withDefaults(defineProps<Props>(), {
    icon: 'menu',
    title: ''
});
</script>

<style lang="scss" scoped>
.l-svg-icon {
    margin-right: 10px;
}
</style>
