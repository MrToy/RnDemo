# 数据持久化储存

> [AsyncStorage](https://facebook.github.io/react-native/docs/asyncstorage.html) 用于持久化储存

```jsx
import React,{Component} from 'react'
import {AsyncStorage,Button} from 'react-native'
class Demo extends Component {
    async onPress(){
        await AsyncStorage.setItem('my-key', 'my-value')
        const value = await AsyncStorage.getItem('my-key')
    }
    render() {
        return (
            <Button title="click me"
                onPress={::this.onPress} />
        )
    }
}
```

AsyncStorage 可以储存key-value类型键值对数据

AsyncStorage 基于 RocksDB 或 SQLite ，取决于你的系统支持什么

AsyncStorage 是异步储存和读取，传入回调函数或使用返回的Promise
