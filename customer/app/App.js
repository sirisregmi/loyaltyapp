import React from 'react';  
import {StyleSheet, Text, View} from 'react-native';  
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';  
import Icon from 'react-native-vector-icons/MaterialIcons';  
import QRCode from 'react-native-qrcode';
import ProfileScreen from './screens/Profile'

class HomeScreen extends React.Component {  
  render() {  
    return (  
        <View style={styles.container}>  
          <Text>Home Screen</Text>  
          
        </View>  
    );  
  }  
}  
 
  
const TabNavigator = createBottomTabNavigator(  
    {  
      Home:{  
        screen:ProfileScreen,  
        navigationOptions:{  
          tabBarLabel:'Home',  
          tabBarIcon:({tintColor})=>(  
              <Icon name="home" color={tintColor} size={30}/>  
          )  
        }  
      },  
      Offers: {  
        screen:HomeScreen,  
        navigationOptions:{  
          tabBarLabel:'Offers',  
          tabBarIcon:({tintColor})=>(  
              <Icon name="local-offer" color={tintColor} size={25}/>  
          )  
        }  
      }, 
      Profile: {  
        screen:HomeScreen,  
        navigationOptions:{  
          tabBarLabel:'Account',  
          tabBarIcon:({tintColor})=>(  
              <Icon name="person" color={tintColor} size={25}/>  
          )  
        }  
      },  
    },  
    {  
      initialRouteName: "Home"  
    },  
);  
const styles = StyleSheet.create({  
  container: {  
    flex: 1,  
    justifyContent: 'center',  
    alignItems: 'center'  
  },  
});  
  
export default createAppContainer(TabNavigator);  