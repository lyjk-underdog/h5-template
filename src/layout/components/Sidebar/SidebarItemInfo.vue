<template>
    <SvgIcon class="l-svg-icon" :icon-class="props.icon"></SvgIcon>

    <span>{{props.title}}</span>
</template>

<script lang="ts">
import type { IconClass } from '@/icons/svg/types';

export namespace Props {
    export type Icon = IconClass;
    export type Title = string;
}
</script>

<script setup lang="ts">

const props = withDefaults(defineProps<{
    icon?: Props.Icon,
    title?: Props.Title
}>(), {
    icon: 'menu',
    title: ''
});
</script>

<style lang="scss" scoped>
.l-svg-icon {
    margin-right: 10px;
}
</style>
