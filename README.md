# 这是一个按需加载的组件库的实践案例（ES Module版）

实现组件按需加载的方式主要有两种：

1. 提供ES Module模块规范编写的组件库，利用打包工具的tree-shaking功能来取出那些未使用的组件。
   
   原理：tree-shaking来'摇掉'无用的代码
   
   怎么做：
   
   组件库的package.json中设置sideEffect标识

2. 利用打包工具提供的具有相关功能的插件，例如：babel-plugin-import插件（Webpack插件）
   
   原理：babel代码转换，例如：
   
   ```javascript
   import { Button } from 'qingui';
   ```
   
   会被编译为以下代码
   
   ```javascript
   import Button from 'package-demo/lib/button.vue';
   import 'package-demo/lib/style/button.css'
   ```

        怎么做：

        搜索babel-plugin-import插件的使用方式即可
