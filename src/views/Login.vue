<template>
    <div class="p-login">
        <VanForm class="c-login-form" @submit="onSubmit">
            <div class="c-login-form_header">登录</div>

            <div class="c-login-form_body">
                <VanCellGroup inset>
                    <VanField v-model="form.username" name="username" label="用户名" placeholder="用户名"
                        :rules="[{ required: true, message: '请填写用户名' }]" />
                    <VanField v-model="form.password" type="password" name="password" label="密码" placeholder="密码"
                        :rules="[{ required: true, message: '请填写密码' }]" />

                    <VanButton class="c-login-form_login-btn" round block type="primary" native-type="submit">登录
                    </VanButton>
                </VanCellGroup>
            </div>
        </VanForm>
    </div>
</template>
  
<script setup lang="ts">
import useUserStore from '@/store/modules/user';
import { RouteRecordName } from '@/router/types';

const userStore = useUserStore();

const router = useRouter();
const curRoute = useRoute();

const form = reactive({
    username: '',
    password: '',
})

// 提交表单
async function onSubmit() {
    await userStore.login(toRaw(form));
    router.replace({ name: curRoute.query.redirect as (undefined | RouteRecordName) || RouteRecordName.Index })
}

</script>

<style lang="scss" scoped>
.p-login {
    min-height: 100vh;
    background-color: #F2F3F7;
    display: flex;
    align-items: center;
    justify-content: center;

    .c-login-form {
        width: 320px;
        background: #fff;
        border-radius: 16px;

        &_header {
            text-align: center;
            padding: 22px 0;
            color: #758093;
            font-size: 16px;
            font-weight: bold;
        }

        &_body {
            padding: 10px 24px 50px;
        }

        &_login-btn {
            width: 100%;
        }
    }
}
</style>