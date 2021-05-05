<template>
<!--  如果插槽里面某个符合就使用disabled-->
<li class="dropdown-option"
  :class="{ 'is-disabled': disabled}">
  <slot> </slot>
</li>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Dropdownltem',
  props: {
    disabled: {
      type: Boolean,
      defaultL: false
    }
  }
})
</script>

<style>
/*插槽里面的内容全部获取 */
.dropdown-option.is-disabled *{
  color:#6c756c;
  /*素永远不会成为鼠标事件的目标*/
  pointer-events: none;
  background-color: transparent;
}

</style>
