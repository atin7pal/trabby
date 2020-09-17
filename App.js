/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { BottomNavigation } from 'react-native-paper';
import {View,Text,Button} from 'react-native';
import {createSwitchNavigator,createAppContainer} from 'react-navigation';
import welcomescreen from './screens/welcomescreen';
import { createStackNavigator } from 'react-navigation-stack';
import mainscreen from './screens/mainscreen';
import dashboardscreen from './screens/dashboardscreen';
import menuscreen from './screens/menuscreen';
import entrylist from './screens/entrylist';
import entryscreen from './screens/entryscreen';
import checkresident from './screens/checkresident'
import addresident from './screens/addresident';




const appswitchnavigator = createStackNavigator({

   Welcome  : {screen : welcomescreen, navigationOptions: ({ navigation }) => {
    return {
      header: () => false,
    }
  },},
   Dashboard : {screen : dashboardscreen, navigationOptions: ({ navigation }) => {
    return {
      header: () => false,
    }
  },},
   Main : {screen : mainscreen, navigationOptions: ({ navigation }) => {
    return {
      header: () => false,
    }
  },},


  Entry : {screen : entrylist, navigationOptions: ({ navigation }) => {
    return {
      header: () => false,
    }
  },},

  resident : {screen : addresident, navigationOptions: ({ navigation }) => {
    return {
      header: () => false,
    }
  },},

  residentlist : {screen : checkresident, navigationOptions: ({ navigation }) => {
    return {
      header: () => false,
    }
  },},


  Entries : {screen : entrylist, navigationOptions: ({ navigation }) => {
    return {
      header: () => false,
    }
  },},

})

const AppContainer = createAppContainer(appswitchnavigator);

class App extends React.Component{
  render(){
    return (
     <AppContainer/>
    );
  }
}

export default App;