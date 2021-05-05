<template>
 <div class="dropdown" ref="dropdownRef">
   <!--阻止a链接的默认行文-->
   <a href="#" class="btn btn-outline-light my-2 dropdown-toggle" @click.prevent="toggleOpen">
     {{title}}
   </a>
   <ul class="dropdown-menu" :style="{display: 'block'}" v-if="isOpen">
     <slot></slot>
   </ul>
 </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted } from 'vue'
export default defineComponent({
  name: 'Dropdown',
  props: {
    title: {
      type: String,
      required: true
    }
  },
  setup () {
    const isOpen = ref(false)
    const dropdownRef = ref<null | HTMLElement>(null)
    // 取反
    const toggleOpen = () => {
      isOpen.value = !isOpen.value
    }
    // 记录着鼠标触发事件时的所有属性
    const handler = (e:MouseEvent) => {
      if (dropdownRef.value) {
        console.log(dropdownRef.value)
        // 判断当前页面点击包含了这个点击事件没有 且 isopen.value = true
        if (!dropdownRef.value.contains(e.target as HTMLElement) && isOpen.value) {
          isOpen.value = false;
        }
      }
    }
    onMounted(() => {
      document.addEventListener('click', handler)
    })
    onUnmounted(() => {
      document.removeEventListener('click', handler)
    })
    return {
      isOpen,
      toggleOpen,
      dropdownRef
    }
  }
})
</script>

<style scoped>

</style>
