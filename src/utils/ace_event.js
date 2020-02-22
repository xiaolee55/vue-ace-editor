const  AceEvent= {
  //输入事件
   _input: function(context,cb) {
      context.on("input",()=>{   
        cb()
      })
   },
  //获取值
  _getVal: function(context) {
    context.getValue()
  },
  //设置值

  //隐藏光标
  _hideCursor: function(context) {
    context.renderer.$cursorLayer.element.style.display = "none"
  }
  
}


export default AceEvent