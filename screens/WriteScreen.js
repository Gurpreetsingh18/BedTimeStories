import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default class WriteScreen extends React.Component{
    render(){
        return(
            <View style = {styles.container}>
                <Text >Welcome to Bed Time Story you can write you stories here</Text>
            </View>
            
        )
    }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});