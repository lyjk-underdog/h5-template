<template>
    <div class="p-login">
        <ElForm class="login-form" ref="loginFormRef" :model="form" :rules="rules">
            <div class="login-form_header">
                <h3 class="login-form_title">Login Form</h3>
            </div>

            <ElFormItem prop="username">
                <ElInput v-model="form.username" placeholder="Username" type="text" />
            </ElFormItem>

            <ElFormItem prop="password">
                <ElInput v-model="form.password" placeholder="Password" type="password" />
            </ElFormItem>

            <ElButton class="login-form_login-btn" type="primary" @click="submit">Login</ElButton>

        </ElForm>
    </div>
</template>
  
<script setup lang="ts">
import type { FormRules, FormInstance } from 'element-plus';

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
    loginFormRef.value?.validate((vaild) => {
        if(vaild) {
            console.log(form);
        }
    })
}

</script>

<style lang="scss" scoped>
.p-login {
    min-height: 100vh;
    background-color: #2d3a4b;
    overflow: hidden;

    .login-form {
        position: relative;
        width: 520px;
        max-width: 100%;
        padding: 160px 35px 0;
        margin: 0 auto;
        overflow: hidden;

        &_header {
            position: relative;
        }

        &_title {
            font-size: 26px;
            color: #fff;
            margin: 0px auto 40px auto;
            text-align: center;
            font-weight: bold;
        }

        &_login-btn {
            width: 100%;
        }
    }
}
</style>