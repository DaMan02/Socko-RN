import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign'
import Landing from '../Landing'
import Menu from '../Menu'
import Notifications from '../Notifications'
import Cart from '../Cart'
import Colors from '../../assets/Colors'

const Tab = createMaterialBottomTabNavigator();

class TabsNavigator extends React.Component {
    render() {
        return (
            <NavigationContainer independent={true}>
                <Tab.Navigator
                    initialRouteName="Home"
                    backBehavior='history'
                    shifting={false}
                    screenOptions={({ route }) => ({
                        tabBarIcon: ({ focused, color, size }) => {
                            let iconName;
                            switch (route.name) {
                                case 'Home': iconName = 'home'; break;
                                case 'Menu': iconName = 'appstore1'; break;
                                case 'Notifications': iconName = 'notification'; break;
                                case 'Cart': iconName = 'shoppingcart'; break;
                            }
                            return <Icon name={iconName} size={20} color={focused ? Colors.primary : Colors.primaryLight} />;
                        },
                    })}
                    barStyle={{ backgroundColor: 'white' }}>
                    <Tab.Screen name="Home" component={Landing}/>
                    <Tab.Screen name="Menu" component={Menu} />
                    <Tab.Screen name="Notifications" component={Notifications} />
                    <Tab.Screen name="Cart" component={Cart} />
                </Tab.Navigator>
            </NavigationContainer>
        );
    }
};

export default TabsNavigator;
