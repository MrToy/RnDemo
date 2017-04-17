##路由组件

目前主要有2种方式

* 使用 react-native 自带的 [Navigator](https://facebook.github.io/react-native/docs/navigator.html) 组件

* 使用 [react-router](https://reacttraining.com/react-router/)


## 图片组件

[Image 文档](https://facebook.github.io/react-native/docs/image.html)

```jsx
//使用require函数加载一个相对目录的图片
class Demo extends Component {
  render() {
    return (
      <View>
        <Image
          style={{width:100, height:100}}
          source={require('./life.png')}
        />
      </View>
    );
  }
}
```

## Linking 函数

[Linking](https://facebook.github.io/react-native/docs/linking.html)用于打开一个url

可以是图片，gps, 网页 ...

## Animated 组件

Animated(https://facebook.github.io/react-native/docs/animated.html) 组件可以用于react-native动画的实现

支持的变量类型
* Animated.Value() 数字类型变量
* Animated.ValueXY() 向量类型变量

支持的组件类型
* Animated.Image
* Animated.ScrollView
* Animated.Text
* Animated.View

```jsx
//使用Animated使一个View渐变出现
import React,{Component} from 'react'
import {Animated,Text} from 'react-native'
class Demo extends Component {
    state={
        fade:new Animated.Value(0)
    }
    componentDidMount(){
        //定义什么时候开始动画
        Animated.timing(
            this.state.fade,
            {toValue:1}
        ).start({
            duration:1000 //持续1000ms，默认值500ms
        })
    }
    render() {
        return (
            <Animated.View>
                <Text>hello world</Text>
            </Animated.View>
        )
    }
}
```


## 其它标准组件

[官网去找](https://facebook.github.io/react-native/docs)

## 视频组件

[react-native-video](https://github.com/react-native-community/react-native-video) (第三方)
