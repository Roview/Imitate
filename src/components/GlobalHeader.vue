<template>
  <nav class="navbar navbar-dark bg-primary justify-content-between mb-4">
    <a href="#" class="navbar-brand">者也专栏</a>
    <ul v-if="! User.isLogin" class="list-inline mb-0">
      <li class="list-inline-item"><a href="#" class="btn btn-outline-light">登陆</a></li>
      <li class="list-inline-item"><a href="#" class="btn btn-outline-light">注册</a></li>
    </ul>
    <ul v-else class="list-inline-item mb-0">
      <Li class="list-inline-item"><a href="#" class="btn btn-outline-light">你好{{username}}</a></Li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
export interface UserProps {
     isLogin:boolean;
     name?:string;
     id?:number;
  }
export default defineComponent({
  name: 'GlobalHeader',
  props: {
    User: {
      type: Object as PropType<UserProps>,
      required: true
    }
  }
})
</script>

<style scoped>

</style>
