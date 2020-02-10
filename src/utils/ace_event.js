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
  }
  //设置值
}

export default AceEvent