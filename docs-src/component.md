# 组件化开发

> React Native使用了React es2015风格的jsx语法进行组件式开发  
> **组件名必须大写**

* 使用函数式风格开发

```jsx
import React,{ Component } from 'react'
import {Text} from 'react-native'

const Child = ()=>(
    <Text>hello world</Text>
)
```

* 使用class风格开发

> 使用 import 关键字引入组件  
> 使用 export 关键字引出组件  

```jsx
import React,{ Component } from 'react'
import {View,Text} from 'react-native'

//定义子组件
class Child extends Component {
  render() {
    return (
        <Text>hello world</Text>
    )
  }
}

//父组件引用子组件
export default class Parent extends Component{
    render() {
      return (
        <View style={{width: 100, height: 100}}>
          <Child />
        </View>
      )
    }
}
```
