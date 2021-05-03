<template>
   <div class="row">
       <div v-for="column in list" :key="column.id" class="col-4">
         <div class="card">
         <img :src="column.avatar" :alt="column.title" class="rounded-circle border border-light w-25 my-3">
         <h5 class="card-title">{{column.title}}</h5>
         <p class="card-text">{{column.description}}</p>
         <a href="#" class="btn btn-primary">进入专栏</a>
       </div>
     </div>
   </div>
</template>

<script lang="ts">
// PropType专门搞成泛型的
import { defineComponent, PropType } from 'vue'
export interface ColumProps{
     id:number,
     title:string,
     avatar:string,
     description:string
  }
  // 组件props 需要自己定义的接口和类型的属性验证
export default defineComponent({
  name: 'ColumnList',
  props: {
    list: {
      type: Array as PropType<ColumProps[]>,
      required: true
    }
  }
  // setup (props) {
  // }
})
</script>

<style scoped>
img{
  width: 73px;
  height: 70px;
}
</style>
