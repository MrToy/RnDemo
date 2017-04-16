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

## 其它标准组件

[官网去找](https://facebook.github.io/react-native/docs)

## 视频组件

[react-native-video](https://github.com/react-native-community/react-native-video) (第三方)

## 第三方组件库

[jscoach](https://js.coach/react-native) 搜索你想要的组件
