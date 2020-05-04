import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TabsNavigator from './TabsNavigator'
import Colors from '../../assets/Colors'
import { StatusBar } from 'react-native'
import LabTests from '../Landing/LabTests';

const Stack = createStackNavigator();

class StackNavigator extends Component {

    render() {
        return (
            <NavigationContainer>
                <StatusBar backgroundColor={Colors.primary} barStyle="light-content" />
                <Stack.Navigator
                    initialRouteName='TabsNavigator'
                    screenOptions={{
                        headerShown: false
                    }}>
                    <Stack.Screen name="TabsNavigator" component={TabsNavigator} />
                    <Stack.Screen name="LabTests" component={LabTests} />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}

export default StackNavigator;
