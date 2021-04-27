<template>
 <div>
   <ul>
     <Li v-for="column in list" :key="column.id">
       <img :src="column.avatar" :alt="column.title">
       <h5>{{column.title}}</h5>
        <p>{{column.description}}</p>
       <a href="#">进入专栏</a>
     </Li>
   </ul>
 </div>
</template>

<script lang="ts">
  //PropType专门搞成泛型的
  import  {defineComponent,PropType} from 'vue'
  export  interface ColumProps{
     id:number;
     title:string;
     avatar:string;
     description:string;
  }
  //组件props 需要自己定义的接口和类型的属性验证
  export default defineComponent({
     name: "ColumnList",
     props:{
      list:{
        type:Array as PropType<ColumProps[]>,
        required:true
      }
     },
    setup(props){

    }
    }
  )
</script>

<style scoped>

</style>
