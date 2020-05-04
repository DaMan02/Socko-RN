import React from 'react';
import { View, Text, ScrollView, StyleSheet, ToastAndroid } from 'react-native';

class Notifications extends React.Component {
    render(){
        return(
            <View style={styles.container}>
              <Text>Notifications</Text> 
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container:{
      flex: 1
  }
});

export default Notifications;