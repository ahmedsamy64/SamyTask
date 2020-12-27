import React from 'react';
import { View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useRoute, useNavigation } from '@react-navigation/native'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import MainScreen from '../Screens/MainScreen';
import CartScreen from '../Screens/CartScreen';
import SearchScreen from '../Screens/SearchScreen';
import Meat_SeafoodScreen from '../Screens/Meat_SeafoodScreen';
import ProductDetailsScreen from '../Screens/ProductDetailsScreenComp';


const Drawer = createDrawerNavigator()

const DrawerContent = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Can Put Custom Drawer Here!</Text>
        </View>
    )
}
function DrawerNavigation(props) {

    return (
        <Drawer.Navigator drawerContent={() => <DrawerContent />} >
            <Drawer.Screen name='Main' component={MainScreen} />
            <Drawer.Screen name='Cart' component={CartScreen} />
            <Drawer.Screen name='Search' component={SearchScreen} />
            <Drawer.Screen name='Meat_Seafood' component={Meat_SeafoodScreen} />
            <Drawer.Screen name='ProductDetails' component={ProductDetailsScreen} />
        </Drawer.Navigator>
    );
}

export default DrawerNavigation;