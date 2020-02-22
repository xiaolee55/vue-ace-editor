<template>
  <div class="ace-container">
    <div class="ace-editor" ref="ace" ></div>
  </div>
</template>
<script>
  import initialEditor from './initialEditor'
  import factory from './utils/factory'
  import * as AceEvent from './utils/ace_event'
  import Debug from './utils/debug'

  export default {
    mounted () {
      this.ace = initialEditor(this.$refs.ace)
      const context = this
      this.ace.on("input",this.listenInput) //监听ace的输入值，并调用函数通知父组件
      this.ace.on("guttermousedown", this.listenGuttermousedown)  
    },
    model :{   //自定义组件实现的v-model，需要在prop中添加content，在方法中触发change
      prop: "content",  
      event: "change"
    },
    props: {
      content: {
        type: String,
        default: ""
      },
      options: {
        type: Object,
        default: ()=>{}
      },
      breakPointLine: {
        type: ["Number","String"],
        default: -1
      }
    },
    data () {
      return {
      }
    },
    methods: {
      listenInput() {
        const value = this.ace.getValue()
        this.changeVal(value)
      },
      listenGuttermousedown(e) {
        const target = e.domEvent.target; 
        const row = e.getDocumentPosition().row 
        //如果不是点击边栏或者点击到箭头，则不执行下面
        if(!target.className.includes("ace_gutter-cell")) 
          return
        else{            //添加断点
          if (e.clientX > 45 + target.getBoundingClientRect().left) 
            return
          this.ace.session.setBreakpoint(row,"wrong_breakpoint")
          e.stop()
        }
      },
      changeVal(val) {   //触发model的change事件，通知父组件修改值
        this.$emit("change",val)
      }
    },
    watch: {
      options: factory(),
      content(val){    //监听父组件传过来的值，并同步到ace
        this.ace.setValue(val,1)
      }
    }
  }
</script>

<style>
.debug_breakpoint {
  background-color: blue!important
}
.blur_breakpoint {
  background-color: grey!important
}
.wrong_breakpoint {
  background-color: red!important
}
/* .ace_gutter-cell.ace_breakpoint { 
  background-color: aqua;
} */
</style>