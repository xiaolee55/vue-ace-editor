<template>
  <div>
    <ace :font-size="num" :theme="theme" :mode="'c_cpp'" v-model="content"></ace>
    <!-- <ace  :theme="theme2" :mode="'javascript'" v-model="content"></ace> -->
    <button @click="create">增加</button>
    <input type="text" v-model="content">
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 20,
      theme: "github",
      theme2: 'gob',
      content: ''
    }
  },
  methods: {
    create() {
      this.num++
    }
  },
}
</script>