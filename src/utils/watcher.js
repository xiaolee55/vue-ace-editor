//封装对ace自定义属性的监控
function Watcher(cb) {
  this.immediate = true
  this.handler = function() {
    const newVal = arguments[0]
    const oldVal = arguments[1]
    const context = this
    
    if(newVal!=oldVal) {
      setTimeout(() => {
        context['ace'][cb]? context['ace'][cb](newVal):context['ace']["session"][cb](newVal)
      }, 50);
    }
  }
}

export default Watcher