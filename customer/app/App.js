//import React, {Component} from 'react';
//import {Platform, StyleSheet, Text, View} from 'react-native';
//import {createRootNavigator} from './router'

//export default createRootNavigator();

//This is an example of React Native Tab
import React from 'react';
import { Icon } from 'react-native-elements';
//import react in our code.
//For React Navigation Version 2+
//import {createStackNavigator, createMaterialTopTabNavigator} from 'react-navigation';
//For React Navigation Version 3+
import {
  createStackNavigator,
  createMaterialTopTabNavigator,
  createAppContainer,
} from 'react-navigation';
//import Navigator in our project


import Bookcase from './screens/Bookcase';
import Explore from './screens/Explore';




//Making TabNavigator which will be called in App StackNavigator
//we can directly export the TabNavigator also but header will not be visible
//as header comes only when we put anything into StackNavigator and then export
const TabScreen = createMaterialTopTabNavigator(
  {
    Home: {
      screen: Bookcase,
      navigationOptions: {
        tabBarLabel: 'Bookcase',
        tabBarIcon: ({ tintColor }) => <Icon name="open-book" type="entypo" size={28} color={tintColor} />
      },

    },
    Offers: { screen: Bookcase },
    Gifts: { screen: Explore },
    Account: { screen: Explore }
  },
  {

 

    tabBarPosition: 'bottom',
    swipeEnabled: true,
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: '#FFFFFF',
      inactiveTintColor: '#F8F8F8',
      showIcon:true,
      showLabel:false,
      style: {
        backgroundColor: '#FFFFF',
      },
      labelStyle: {
        textAlign: 'center',
      },
      indicatorStyle: {
        borderBottomColor: '#87B56A',
        borderBottomWidth: 2,
      },
    },
  }
);

//making a StackNavigator to export as default
const App = createStackNavigator({
  TabScreen: {
    screen: TabScreen
  },
});
//For React Navigation Version 2+
//export default App;
//For React Navigation Version 3+
export default createAppContainer(App);