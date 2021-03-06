import React from 'react';
import { StyleSheet, Image } from 'react-native';
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import WriteScreen from './screens/WriteScreen'
import ReadScreen from './screens/ReadScreen'



export default class App extends React.Component {
  render(){
    return (
        <AppContainer />
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Read: {screen: ReadScreen},
  Write: {screen: WriteScreen},
},
  {
    defaultNavigationOptions:
    ({navigation})=>{
      return(
        {
          tabBarIcon:
          ()=>{
            const routeName = navigation.state.routeName;
            if(routeName=='Read'){
              return(
                <Image source = {require('./assets/read.png')} style = {{width:40,height :40}}></Image>
              )
            }else if(routeName=='Write'){
              return(
                <Image source = {require('./assets/write.png')} style = {{width:40,height :40}}></Image>
              )
            }
          }
        }
      )
    }
  }
);

const AppContainer =  createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
