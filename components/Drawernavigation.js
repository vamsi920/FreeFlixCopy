import React, { Component } from 'react'
import { Text, View , StyleSheet, Image, TouchableOpacity} from 'react-native'
import Home from './Home.js';
import {
	
	createAppContainer,
	DrawerItems,
	SafeAreaView
} from "react-navigation";
import { createDrawerNavigator } from 'react-navigation-drawer';
export class Drawernavigation extends Component {
    static navigationOptions = { header: null };
    render() {
        return <Drawers />;
    }
}
const Navigator = createDrawerNavigator(
	{
		Home: Home,
	},
	{
		initialRouteName: "Home",
	}
);
const Drawers = createAppContainer(Navigator);
const styles = StyleSheet.create({
	container: {
		flex: 1
    },
})    
export default Drawernavigation
