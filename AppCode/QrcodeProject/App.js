'use strict';

import React from 'react';
import QRCode from 'react-native-qrcode';
import { AppRegistry, StyleSheet, Text, View, Image, TextInput } from 'react-native';



export default class App extends React.Component {
  state = {
	text: 'https://www.google.se',
  };
  render() {
	let pic = {
      uri: 'http://pages.huizuche.com/uploadfile/2016/1103/20161103090010502.jpg'
    };
    return (
      <View style={styles.container}>
		<Text style={styles.titleText}>二维码生成器</Text> 
		<Image source={pic} style={{width: 300, height: 200}}/>  

        <TextInput
          style={styles.input}
          onChangeText={(text) => this.setState({text: text})}
          value={this.state.text}
        />
        <QRCode
          value={this.state.text}
          size={200}
          bgColor='purple'
          fgColor='white'/>		
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'powderblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  
	
  input: {
	height: 40,
	borderColor: 'gray',
	borderWidth: 1,
	margin: 10,
	borderRadius: 5,
	padding: 5,
  }
});