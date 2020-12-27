import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, ImageBackground, Alert, ActivityIndicator } from 'react-native';
import { Icon } from 'react-native-elements'
import { useIsFocused } from '@react-navigation/native'
import { observer, inject } from 'mobx-react'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';


function ProductDetailsScreen(props) {

    const [quantity, setQuantity] = useState(1)


    useEffect(() => {
        setQuantity(1)
    }, [useIsFocused()])

    return (
        <View style={{ alignItems: 'center', }}>
            {/* Same header as meat_seafoodScreen */}
            <View style={{ height: responsiveHeight(11.5), width: responsiveWidth(100) }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: responsiveHeight(6) }}>
                    <Icon name='angle-left' type='font-awesome' color='#2B88C9' size={responsiveWidth(7)} iconStyle={{ marginBottom: 5 }} onPress={() => props.navigation.goBack()} />
                    <Text style={{ textAlign: 'center', width: responsiveWidth(55), color: '#2B88C9', fontSize: responsiveFontSize(3.3), marginLeft: responsiveWidth(13), fontFamily: 'Poppins-Regular' }}>{props.route.params.name}</Text>
                    <Icon name='search' type='feather' color='#2B88C9' size={responsiveWidth(7)} iconStyle={{ marginLeft: responsiveWidth(3) }} onPress={() => props.navigation.navigate('Search')} />
                    <Icon name='shopping-cart' type='font-awesome' color='#2B88C9' size={responsiveWidth(7)} iconStyle={{ marginLeft: responsiveWidth(3) }} onPress={() => props.navigation.navigate('Cart')} />
                </View>
            </View>
            <Image source={{ uri: props.route.params.img }} style={{ height: responsiveHeight(18), width: responsiveWidth(55), marginTop: responsiveHeight(4.5) }} />
            <Text style={{ marginTop: responsiveHeight(2), fontFamily: 'Poppins-Regular', fontSize: responsiveFontSize(2.7) }}>{props.route.params.name}</Text>
            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: responsiveFontSize(2.4) }}>{props.route.params.weight}</Text>
            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: responsiveFontSize(3.5) }}>EGP {props.route.params.price}</Text>
            {/* quantity section */}
            <View style={{ marginTop: responsiveHeight(3), alignSelf: 'flex-start', marginLeft: responsiveWidth(6.5), flexDirection: 'row' }}>
                <Text style={{ fontFamily: 'Poppins-Regular', fontSize: responsiveFontSize(2.6) }}>Qty</Text>
                <View style={{ marginLeft: responsiveWidth(10), flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', height: responsiveHeight(4), width: responsiveWidth(22.5), borderWidth: 1, borderColor: 'grey' }} >
                    <Text style={{ fontSize: responsiveFontSize(3) }} onPress={() => quantity == 1 ? null : setQuantity(quantity - 1)}>-</Text>
                    <Text style={{ fontSize: responsiveFontSize(2) }}>{quantity}</Text>
                    <Text style={{ fontSize: responsiveFontSize(2.5) }} onPress={() => setQuantity(quantity + 1)}>+</Text>
                </View>

            </View>
            {/* price section */}
            <View style={{ marginTop: responsiveHeight(3), alignSelf: 'flex-start', marginLeft: responsiveWidth(6.5), flexDirection: 'row' }}>
                <Text style={{ fontFamily: 'Poppins-Regular', fontSize: responsiveFontSize(2.6) }}>Total</Text>
                <Text style={{ fontFamily: 'Poppins-Regular', fontSize: responsiveFontSize(2.6), marginLeft: responsiveWidth(6.5), color: '#D95500' }}>EGP{parseInt(props.route.params.price) * quantity}</Text>
            </View>
            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: responsiveFontSize(2), textAlign: 'left', marginLeft: responsiveWidth(6.5), marginTop: responsiveHeight(2) }}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy {"\n"}eirmod tempor invidunt ut labore et {"\n"}dolore magna aliquyam erat, sed diam {"\n"}voluptua. At vero eos et accusam et</Text>
            <TouchableOpacity onPress={() => console.log('work here')}
                style={{ marginTop: responsiveHeight(4), height: responsiveHeight(6), width: responsiveWidth(87), backgroundColor: '#D95500', borderRadius: 5, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: 'white', fontSize: responsiveFontSize(2) }}>ADD TO CART</Text>
            </TouchableOpacity>
        </View >
    );
}

export default ProductDetailsScreen;