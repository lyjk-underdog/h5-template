<template>
    <ElBreadcrumb separator="/">
        <ElBreadcrumbItem v-for="routingRecord in matchedList" :key="routingRecord.path"
            :to="{name: routingRecord.name}">
            {{routingRecord.meta.title}}
        </ElBreadcrumbItem>
    </ElBreadcrumb>
</template>

<script setup lang="ts">
const route = useRoute();

const matchedList = computed(() => {
    return route.matched.filter(routingRecord => routingRecord.meta.title)
})
route
</script>

<style scoped>

</style>