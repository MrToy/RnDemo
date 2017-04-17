# 第三方组件

## 常用组件库

[jscoach](https://js.coach/react-native) 搜索你想要的组件


## 引入方式

### Step1

在[npm](https://www.npmjs.com)上下载你所需要的组件

    npm install your-components --save

### Step2

手动或自动link到你的项目

* 自动方式

        react-native link  your-components

* 手动方式

    [ios](https://facebook.github.io/react-native/docs/linking-libraries-ios.html#manual-linking)

    [android](https://www.npmjs.com/package/react-native-fs#usage-android)

### Step3

在你的代码里引入并使用

```jsx
import {SomeComponent} from 'your-components'
const Demo = ()=>(
    <SomeComponent />
)
```
