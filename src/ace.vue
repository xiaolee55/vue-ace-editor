<template>
  <div class="ace-container">
    <div class="ace-editor" ref="ace" ></div>
  </div>
</template>
<script>
  import initialEditor from './initialEditor'
  import factory from './utils/factory'
  import * as AceEvent from './utils/ace_event'

  export default {
    mounted () {
      this.ace = initialEditor(this.$refs.ace)
      this.ace.on("input",()=>{ //监听ace的输入值，并调用函数通知父组件
        const value = this.ace.getValue()
        this.changeVal(value)
      })     
    },
    model :{   //自定义组件实现的v-model
      prop: "content",
      event: "change"
    },
    props: {
      theme: {
        type: String,
        default: "katzenmilch"
      },
      fontSize:{
        type: [Number,String],
        default: 15
      },
      mode:{
        type: String,
        default: "c_cpp"
      },
      content: {
        type: String,
        default: ""
      },
      debugLine: {
        type: Number,
        default: -1
      },
      debugStatus: {
        type: Boolean,
        default: false
      },
      maxLines: {
        type: Number,
        default: 0
      },
      readOnly: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
      }
    },
    methods: {
      changeVal(val) {   //触发model的change事件，通知父组件修改值
        this.$emit("change",val)
      }
    },
    watch: {
      fontSize: factory("setFontSize"),
      _theme: factory("setTheme"),
      _mode: factory("setMode"),
      content(val){    //监听父组件传过来的值，并同步到ace
        this.ace.setValue(val,1)
      }
    },
    computed: {
      _theme() {
        return `ace/theme/${this.theme}`
      },
      _mode() {
        return `ace/mode/${this.mode}`
      }
    }
  }
</script>