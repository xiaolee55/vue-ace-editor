<template>
  <div>
    <ace  v-model="content" :options="options"></ace>
    <button @click="create">增加</button>
    <input type="text" v-model="content">
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: {
        fontSize: 18,
        theme: "ace/theme/github",
        mode: "ace/mode/c_cpp",
        // readOnly: true,
        // highlightActiveLine: false,
        // highlightGutterLine: false,
        // showGutter: false,
        // showPrintMargin: false
      },
      content: ''
    }
  },
  methods: {
    create() {
      this.options.fontSize++
      this.options.readOnly = false
    }
  },
}
</script>