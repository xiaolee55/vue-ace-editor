import ace from 'ace-builds'
import 'ace-builds/webpack-resolver' // 在 webpack 环境中使用必须要导入
import 'ace-builds/src-noconflict/theme-monokai' // 默认设置的主题
import 'ace-builds/src-noconflict/mode-javascript' // 默认设置的语言模式
import 'ace-builds/src-noconflict/ext-language_tools.js'

function initialEditor(context) {
  return ace.edit(context, {
    maxLines: 20, // 最大行数，超过会自动出现滚动条
    minLines: 10, // 最小行数，还未到最大行数时，编辑器会自动伸缩大小
    fontSize: 14, // 编辑器内字体大小
    theme: "ace/theme/twilight", // 默认设置的主题
    mode: "ace/mode/c_cpp", // 默认设置的语言模式
    tabSize: 4, // 制表符设置为 4 个空格大小
    enableBasicAutocompletion: true,
    enableSnippets: true,
    enableLiveAutocompletion: true
  })
}

export default initialEditor