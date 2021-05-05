import {ref, onMounted, onUnmounted, Ref } from 'vue'

const useClickOutside=(elementRef:Ref<null | HTMLElement>) => {
    const isClickOutside=ref(false)
   // 判断当前点击的这个对象在不在这个HTMLElement里
    const handler=(e:MouseEvent)=>{
       if(elementRef.value) {
          if(elementRef.value.contains(e.target as HTMLElement) && elementRef.value ){
             isClickOutside.value=false;
          }else {
             isClickOutside.value=true;
          }
       }
    }
  onMounted(() => {
    document.addEventListener('click', handler )
  })
  onUnmounted(() => {
    document.removeEventListener('click', handler)
  })
    return isClickOutside;
}
export  default useClickOutside
