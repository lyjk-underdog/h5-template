<template>

    <ElDropdown>
        <div class="c-navbar-user">
            <img class="c-navbar-user_avatar" :src="userStore.avatar">
            <ElIcon>
                <CaretBottom />
            </ElIcon>
        </div>

        <template #dropdown>
            <ElDropdownItem @click="logout">Log Out</ElDropdownItem>
        </template>
    </ElDropdown>

</template>

<script setup lang="ts">
import { CaretBottom } from '@element-plus/icons-vue';
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

<style lang="scss" scoped>
.c-navbar-user {
    cursor: pointer;

    &_avatar {
        width: 40px;
        border-radius: 10px;
        margin-right: 5px;
    }
}
</style>