<template>
  <nav class="navbar navbar-dark bg-primary justify-content-between mb-4">
    <a href="#" class="navbar-brand">者也专栏</a>
    <ul v-if="! User.isLogin" class="list-inline mb-0">
      <li class="list-inline-item"><a href="#" class="btn btn-outline-light">登陆</a></li>
      <li class="list-inline-item"><a href="#" class="btn btn-outline-light">注册</a></li>
    </ul>
    <ul v-else class="list-inline-item mb-0">
      <li class="list-inline-item">
        <dropdown :title="`你好 ${User.name}`">
          <dropdownltem><a href="#" class="dropdown-item">新建文章</a></dropdownltem>
          <dropdownltem disabled><a href="#" class="dropdown-item">编辑资料</a></dropdownltem>
          <dropdownltem><a href="#" class="dropdown-item">退出登陆</a></dropdownltem>
        </dropdown>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import Dropdown from './Dropdown.vue';
import Dropdownltem from './Dropdownltem.vue'
export interface UserProps {
     isLogin:boolean;
     name?:string;
     id?:number;
  }
export default defineComponent({
  name: 'GlobalHeader',
  components: {
    Dropdown,
    Dropdownltem
  },
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
