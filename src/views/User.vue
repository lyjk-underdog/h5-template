<template>
    <div>
        <p>
            <span>头像：</span>
            <img :src="userStore.avatar" />
        </p>
        <p>姓名：{{ userStore.name }}</p>
        <VanButton @click="logout">退出登录</VanButton>
    </div>
</template>

<script setup lang="ts">
import useUserStore from '@/store/modules/user';
import { RouteRecordName } from '@/router/types';

const userStore = useUserStore();
const router = useRouter();
const route = useRoute();

function logout() {
    userStore.resetToken();
    router.replace({ name: RouteRecordName.Login, query: { redirect: route.name as RouteRecordName } })
}

</script>

<style scoped>

</style>