# 样式与布局

### 样式规则

React Native 里使用了类似于css的样式名，且大多数css样式已经实现

样式名必须使用 **camelCase (驼峰式)** 写法

使用margin, padding, flex 进行布局 （无css的position）

> 详细样式列表请参考 对应的组件 的 官方文档

### 样式定义

* 使用内联样式

```jsx
import React,{ Component } from 'react'
import {Text} from 'react-native'

const Component = ()=>(
    <Text style={{color:"rgb(38,124,252)"}}>hello world</Text>
)
```

* 使用样式表 (推荐)

```jsx
import React,{ Component } from 'react'
import {StyleSheet,Text} from 'react-native'

const styles = StyleSheet.create({
  text:{
      color:"rgb(38,124,252)"
  }
})

const Component = ()=>(
    <Text style={styles.text}>hello world</Text>
)
```

### 样式单位

react-native 默认使用了dp作为单位

如果希望使用百分比，请使用flex布局
