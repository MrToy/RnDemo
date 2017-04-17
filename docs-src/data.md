# 数据传递

### 当前组件数据

> 使用state进行管理

```jsx
import React,{ Component } from 'react'
import {View,TextInput,Text} from 'react-native'

//使用this.state获取state的内容
//使用this.setState()改变state的内容
class Edit extends Component {
    state={text:"请输入点什么..."}  //初始化state
    render() {
        return (
            <View>
                <TextInput
                    style={{height: 40, borderBottomWidth:1, borderBottomColor: 'gray'}}
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                />
                <Text>{this.state.text}</Text>
            </View>
        )
    }
}
```

### 父子组件数据传递

> 使用props进行管理

```jsx
import React,{ Component } from 'react'
import {View,Text} from 'react-native'

//定义子组件
//子组件通过this.props获取数据
class Child extends Component {
  render() {
    return (
        <Text>{this.props.text}</Text>
    )
  }
}


//父组件里引用子组件
//父组件在标签上定义props数据
class Parent extends Component{
    render() {
      return (
        <View>
          <Child text="hello world" />
        </View>
      )
    }
}
```

### 跨组件数据传递

使用 [redux](http://redux.js.org/) 或 [mobx](https://mobx.js.org/) 等工具进行管理
