import AceEvent from './ace_event'

function OptionsWatcher() {
  this.immediate = true
  this.deep = true
  this.handler = function() {
    const options = arguments[0]
    setTimeout(() => {
      const context = this.ace
      const oldOptions = context.getOptions()
      const newOptions = Object.assign({},oldOptions,options)
      context.setOptions(newOptions)     
      context.session.setBreakpoint(1)
      context.getSession().setUseWrapMode(true);
      options['readOnly'] === true? AceEvent._hideCursor(context) : ''  //如果是只读模式则这里处理隐藏光标
    }, 50);
  }
}

export default OptionsWatcher