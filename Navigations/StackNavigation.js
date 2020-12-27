import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DrawerNavigation from './DrawerNavigation'
import { Provider } from 'mobx-react'
import AppStore from '../Store/Store'

const Stack = createStackNavigator();
const store = new AppStore()

function StackNavigation(props) {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{ headerShown: false }} >
                    <Stack.Screen name='Drawer' component={DrawerNavigation} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}

export default StackNavigation;