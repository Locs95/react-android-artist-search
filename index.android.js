/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import SearchBar from './components/SearchBar'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Modal
} from 'react-native';

export default class alex extends Component {
   
   constructor(props) {
       super(props);
       this.state = {
          modalVisible: false
       }

       this.openModal = this.openModal.bind(this);
       this.closeModal = this.closeModal.bind(this);
   }
  

  
  openModal() {
     this.setState({
       modalVisible: true
     });
  }

  closeModal() {
     this.setState({
        modalVisible: false
     });
  }

  render() {
    return (
      <View style={styles.container}>
        <SearchBar />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('alex', () => alex);
