import React, { Component } from 'react'
import { Text, View , StyleSheet, Image, TouchableOpacity} from 'react-native'
import {width, height} from 'react-native-dimension';
import {  createAppContainer } from "react-navigation";
import {createStackNavigator} from 'react-navigation-stack';
import DrawerNavigation from './components/Drawernavigation.js';
import Home from './components/Home.js'
export class App extends Component {
  static navigationOptions = { header: null };
  render() {
    return (
      <View style={styles.container}>
      <AppContainer/>
      </View>
    )
  }
}
const RootStack = createStackNavigator(
  {
    Home:Home,
    DrawerNavigation: DrawerNavigation,
  },
  {
    initialRouteName: "Home"
  }
);
const AppContainer = createAppContainer(RootStack);
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
 
});
export default App
