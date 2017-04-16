# 组件的生命周期

> react-native 与 react 的生命周期完全一致

![lifecircle](life.jpg)

> 其中，react 共提供了10个生命周期相关函数

1. getDefaultProps （es2015语法里需要使用static修饰）

    初始化时调用, 返回默认props。

    ```jsx
    //react-native 使用了es2015语法, getDefaultProps需要加static
    class Demo extends Component{
        static getDefaultProps(){
            return {a:1}
        }
        render(){
            return (
                    <Text>{this.props.a}</Text>
            )
        }
    }
    ```

2. getInitialState (使用es2015语法代替)

    初始化时调用, 返回默认state。

    ```jsx
    //react-native 使用了es2015语法, state作为类的属性
    class Demo extends Component{
        state={a:1}
        render(){
            return (
                    <Text>{this.state.a}</Text>
            )
        }
    }
    ```

3. componentWillMount

    在完成首次渲染前调用。

4. render (必须)

    使用用户代码渲染视图

5. componentDidMount

    组件被渲染出来后调用

6. componentWillReceiveProps

    组件接收到新的props时调用，并将其作为参数nextProps使用，此时可以更改组件props及state。

7. shouldComponentUpdate

    组件是否应当渲染新的props或state，返回false表示跳过后续的生命周期方法，通常不需要使用以避免出现bug。在出现应用的瓶颈时，可通过该方法进行适当的优化。

    在首次渲染期间或者调用了forceUpdate方法后，该方法不会被调用

8. componentWillUpdate

    接收到新的props或者state后，进行渲染之前调用，此时不允许更新props或state。

9. componentDidUpdate

    完成渲染新的props或者state后调用。

10. componentWillUnmount

    组件被移除之前被调用，可以用于做一些清理工作，在componentDidMount方法中添加的所有任务都需要在该方法中撤销，比如创建的定时器或添加的事件监听器。
