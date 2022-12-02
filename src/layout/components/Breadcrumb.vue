<template>
    <ElBreadcrumb separator="/">
        <ElBreadcrumbItem v-for="(routingRecord, index) in matchedList" :key="routingRecord.path"
            :to="{ name: routingRecord.name }">
            <span
                :style="{ color: index === matchedList.length - 1 ? '#2A77FF' : '#666666' }">{{ routingRecord.meta.title }}</span>
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