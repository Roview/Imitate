<template>
  <div id="container">

  </div>
<!--  <router-view/>-->
</template>

<script lang="ts">
 import {defineComponent} from 'vue'
 import  "bootstrap/dist/css/bootstrap.min.css"
 import ColumnList from "./components/ColumnList.vue";
 import { ColumProps } from "@/components/ColumnList.vue";
  const testData: ColumProps[] = [
    {
      id:1,
      title:'这是仿知乎的专栏',
      description:"这是仿知乎的专栏,有一段非常有意思的介绍,可以更新一下嗷",
      avatar:"",
    },
    {
     id:1,
     title:'这是仿知乎的专栏',
     description:"这是仿知乎的专栏,有一段非常有意思的介绍,可以更新一下嗷",
     avatar:"",
    }
  ]
 export  default defineComponent({
      nameL:"App",
      components:{
        ColumnList
      },
      setup(){
          return{
           list:testData
          }
      }
 })
</script>
<style>

</style>
