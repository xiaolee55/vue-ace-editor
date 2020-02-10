# vue-ace-editor
> 基于ace editor封装的vue组件，开箱即用。

## 官方文档
https://ace.c9.io/#nav=api

## 安装
    npm i --S vue-ace-editor

## 基本用法
    <template>
      <ace></ace>
    </template>
    
    <script>
      import ace from 'vue-ace-editor'
      export default {
      
      }
    </script>
    
    
    	

## 基本配置

- 主题

|  theme |
| ------------ |
|  ambiance |
|  eclipse |
|  github |
|  chrome |
|  xcode |

更多请查看：https://github.com/ajaxorg/ace/tree/master/lib/ace/theme

eg：

    <ace :theme="github"></ace>

![14ubHU.png](https://s2.ax1x.com/2020/02/10/14ubHU.png)

- 语言


| mode|
| ------------ |
|  javascript |
|  java |
|  c_cpp |
|  php |
|  python |

更多配置请看：https://github.com/ajaxorg/ace/tree/master/lib/ace/mode


`<ace :mode="c_cpp"></ace>`

![14K0VU.png](https://s2.ax1x.com/2020/02/10/14K0VU.png)


- 字体大小

`<ace :font-size="14"></ace>`

- 代码补全

`<ace :auto-completion="true"></ace>`

![14KBaF.png](https://s2.ax1x.com/2020/02/10/14KBaF.png)

- 只读模式
- 编辑内容
- 宽高
- 开启实时修改配置面板

## 高级配置

- 键位绑定
- 断点设置
- 标记
