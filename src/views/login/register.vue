<template>
  <div>
    <div class="fx p-32">
      <svg-icon icon-class="logo" class="wh-35" />
      <span class="pl-8 font-bold text-lg text-primary">To Do List</span>
    </div>
    <div class="login shadow">
      <h3 class="text-primary text-center">注册</h3>
      <q-form @submit="handleRegister" class="login-form mx-auto">
        <div class="pb-32">
          <q-input :rules="[val => val && val.length > 0 || '请输入邮箱',validateEmail]" color="primary" v-model="loginForm.email" label="邮箱">
            <template v-slot:prepend>
              <q-icon name="email" />
            </template>
          </q-input>
        </div>
        <div class="pb-32">
          <q-input color="primary" :rules="[val => val && val.length>=8 || '密码必须大于或者等于8位']" type="password" v-model="loginForm.password" label="密码">
            <template v-slot:prepend>
              <q-icon name="password" />
            </template>
          </q-input>
        </div>
        <div class="pb-32 pt-16">
          <q-btn type="submit" class="w-full" color="primary">
            注册
            <template v-slot:loading>
              <q-spinner-radio />
            </template>
          </q-btn>
        </div>
        <div class="text-center">
          <span class="text-secondary">已经有账号？</span>
          <RouterLink class="text-primary" to="/login">登录</RouterLink>
        </div>
      </q-form>
    </div>
  </div>
</template>

<script lang="ts">
import {Component} from "vue-property-decorator"
import loginMixin from '@/mixins/login'
import { mixins } from 'vue-class-component'
import {register} from "@/api/users"

@Component({
  name: 'Register'
})

export default class Login extends mixins(loginMixin) {
  private async handleRegister() {
    const { data } = await register(this.loginForm)
    data && await this.$router.push('/login')
  }
}
</script>

<style lang="scss" scoped>
@import "./scss/index";
</style>
