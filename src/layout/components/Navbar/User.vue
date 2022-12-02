<template>

    <ElDropdown>
        <div class="c-navbar-user">
            <img class="c-navbar-user_avatar" :src="userStore.avatar">
            <span class="c-navbar-user_name">{{userStore.name}}</span>
            <ElIcon :size="20" color="#fff">
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
    display: flex;
    align-items: center;

    &_avatar {
        width: 36px;
        border-radius: 50%;
        box-shadow: 0px 3px 6px rgba(0,0,0,0.16);
        margin-right: 20px;
    }

    &_name {
        font-size: 20px;
        font-weight: bold;
        color: #FFFFFF;
        margin-right: 12px;
    }
}
</style>