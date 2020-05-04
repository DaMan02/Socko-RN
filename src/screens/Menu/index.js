import React from 'react';
import { View, Text, ScrollView, StyleSheet, ToastAndroid } from 'react-native';

class Menu extends React.Component {
    render(){
        return(
            <View style={styles.container}>
              <Text>Menu</Text> 
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container:{
      flex: 1
  }
});

export default Menu;