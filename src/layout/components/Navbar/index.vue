<template>
    <div class="c-navbar">
        <section class="l-breadcrumb">
            <BreadcrumbVue />
        </section>

        <section class="l-user">
            <UserVue />
        </section>
    </div>
</template>

<script setup lang="ts">
import BreadcrumbVue from './Breadcrumb.vue';
import UserVue from './User.vue';
</script>

<style lang="scss" scoped>
.c-navbar {
    display: flex;
    align-items: center;
    background: #fff;
    box-shadow: 0 1px 4px rgba(0, 21, 41, .08);
    padding: 5px 10px;

    .l-breadcrumb {
        flex: 1 1 auto;
    }

    .l-user {
        flex: 0 0 auto;
    }
}
</style>