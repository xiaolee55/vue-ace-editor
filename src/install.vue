<script>
// 这个就是自己写的 ACE 组件
import ACE from './ace.vue'

export default {
  install: function (Vue, options) {
    Vue.component('ace', ACE)
  }
}
</script>