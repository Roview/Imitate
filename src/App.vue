<template>
  <div id="container">
    <global-header :User="currentUser"></global-header>
    <column-list :list="list"></column-list>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import ColumnList, { ColumProps } from '@/components/ColumnList.vue'
import GlobalHeader, { UserProps } from '@/components/GlobalHeader.vue'
const currentUser: UserProps = {
  isLogin: false
}
const testData: ColumProps[] = [
  {
    id: 1,
    title: '这是仿知乎的专栏',
    description: '这是仿知乎的专栏,有一段非常有意思的介绍,可以更新一下嗷',
    avatar: 'https://vuejs.org/images/logo.png'
  },
  {
    id: 2,
    title: '这是仿知乎的专栏',
    description: '这是仿知乎的专栏,有一段非常有意思的介绍,可以更新一下嗷'
    // avatar: 'https://vuejs.org/images/logo.png'
  },
  {
    id: 3,
    title: '这是仿知乎的专栏',
    description: '这是仿知乎的专栏,有一段非常有意思的介绍,可以更新一下嗷',
    avatar: 'https://vuejs.org/images/logo.png'
  },
  {
    id: 4,
    title: '这是仿知乎的专栏',
    description: '这是仿知乎的专栏,有一段非常有意思的介绍,可以更新一下嗷',
    avatar: 'https://vuejs.org/images/logo.png'
  }
]
export default defineComponent({
  name: 'App',
  components: {
    ColumnList,
    GlobalHeader
  },
  setup () {
    return {
      list: testData,
      currentUser
    }
  }
})
</script>
<style>

</style>
