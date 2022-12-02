<template>
    <div class="c-navbar">
        <TitleVue />

        <div class="c-trapezoidal-box">
            <i></i>
            <div class="c-trapezoidal-box_body">
                <UserVue />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import UserVue from './User.vue';
import TitleVue from './Title.vue';
</script>

<style lang="scss" scoped>
.c-navbar {
    height: 64px;
    border-bottom: 1px solid #ccc;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .c-trapezoidal-box {
        display: flex;

        i {
            border-left: 30px solid transparent;
            border-bottom: 64px solid #5592FE;
        }

        &_body {
            height: 64px;
            width: 356px;
            background: #5592FE;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
}
</style>