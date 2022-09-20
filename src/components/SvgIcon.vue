<template>
    <svg class="c-svg-icon" aria-hidden="true">
        <use :xlink:href="iconName"></use>
    </svg>
</template>

<script lang="ts">
import type * as SvgTypes from '@/icons/svg/types';

export namespace Props {
    export type IconClass = SvgTypes.IconClass;
}
</script>

<script setup lang="ts">

const props = defineProps<{
    iconClass: Props.IconClass
}>();

const iconName = computed(() => '#icon-' + props.iconClass);
</script>

<style scoped lang="scss">
.c-svg-icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
}
</style>