<template>
    <div class="p-login">
        <ElForm class="c-login-form" ref="loginFormRef" :model="form" :rules="rules">
            <div class="c-login-form_header">登录</div>

            <div class="c-login-form_body">
                <ElFormItem prop="username">
                    <ElInput v-model="form.username" placeholder="Username" type="text" size="large" />
                </ElFormItem>

                <ElFormItem prop="password">
                    <ElInput v-model="form.password" placeholder="Password" type="password" size="large" />
                </ElFormItem>

                <ElButton class="c-login-form_login-btn" size="large" type="primary" @click="submit">登录</ElButton>
            </div>

        </ElForm>
    </div>
</template>
  
<script setup lang="ts">
import type { FormRules, FormInstance } from 'element-plus';
import useUserStore from '@/store/modules/user';
import { RouteRecordName } from '@/router/types';

const userStore = useUserStore();

const router = useRouter();
const curRoute = useRoute();

const loginFormRef = ref<FormInstance>();
const form = reactive({
    username: '',
    password: ''
})

const rules: FormRules = {
    username: {
        required: true,
        message: '用户名不能为空！'
    },
    password: {
        required: true,
        message: '密码不能为空！'
    }
}

function submit() {
    loginFormRef.value?.validate(async (vaild) => {
        if (vaild) {
            await userStore.login({
                username: form.username,
                password: form.password
            });
            router.replace({ name: curRoute.query.redirect as (undefined | RouteRecordName) || RouteRecordName.Index })
        }
    })
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