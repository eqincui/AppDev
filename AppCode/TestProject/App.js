import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';


export default class App extends React.Component {
  render() {
	let pic = {
      uri: 'http://atth.jzb.com/forum/201107/13/145105w4qpp7ba766viucm.jpg'
    };
    return (
      <View style={styles.container}>
		    <Text>录取通知书</Text> 
		<Image source={pic} style={{width: 300, height: 200}}/>    
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
});