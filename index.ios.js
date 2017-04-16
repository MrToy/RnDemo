import React,{ Component } from 'react'
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    Linking
} from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:20,
    backgroundColor: '#fff',
  },
  input:{
      height: 40,
      borderWidth:1,
      borderColor:"#ccc",
      padding:5,
      marginBottom:5,
      marginTop:20
  }
})


class Edit extends Component {
    state={text:"请输入点什么..."} //初始化state
    render() {
        return (
            <View>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                />
                <Text style={{color:"rgb(38,124,252)"}}>{this.state.text}</Text>
            </View>
        )
    }
}


export default class RnDemo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Edit />
      </View>
    )
  }
}


AppRegistry.registerComponent('RnDemo', () => RnDemo);
