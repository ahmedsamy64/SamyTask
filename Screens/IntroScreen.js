import React, { useState, useEffect } from 'react'
import { Alert, View, StyleSheet, TouchableOpacity, Text, FlatList, Image } from 'react-native'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import AppIntroSlider from 'react-native-app-intro-slider';
import { Icon } from 'react-native-elements';






const IntroScreen = ({ navigation, onDone }) => {



    const slides = [
        {
            key: '1',
            title: 'Title 1',
            text: 'Lorem ipsum dolor sit amet, consetetur \n elitr, sed diam nonumy eirmod tempor \n    invidunt ut labore et dolore magna \n             aliquyam erat, sed diam',
            image: require('../assets/item1.png'),
        },
        {
            key: '2',
            title: 'Title 2',
            text: 'Lorem ipsum dolor sit amet, consetetur \n elitr, sed diam nonumy eirmod tempor \n    invidunt ut labore et dolore magna \n             aliquyam erat, sed diam',
            image: require('../assets/item2.png'),
        },
        {
            key: '3',
            title: 'Title 3',
            text: 'Lorem ipsum dolor sit amet, consetetur \n elitr, sed diam nonumy eirmod tempor \n    invidunt ut labore et dolore magna \n             aliquyam erat, sed diam',
            image: require('../assets/item3.png'),
        }
    ];



    return (
        <AppIntroSlider
            data={slides}
            onDone={() => { onDone(false); }}
            renderItem={({ item }) => {
                return (
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ height: responsiveHeight(20) }} />
                        <Image style={{ width: responsiveWidth(60), height: responsiveHeight(20), resizeMode: 'contain' }} source={item.image} />
                        <Text style={{ fontFamily: 'Poppins-Medium', fontSize: responsiveFontSize(4.5), color: '#2E2E2E', marginTop: responsiveHeight(10) }}>{item.title}</Text>
                        <Text style={{ fontFamily: 'Poppins-Regular', color: 'black' }}>{item.text}</Text>
                    </View>
                );
            }}
            renderDoneButton={() => {
                return (
                    <View style={{ height: responsiveHeight(6), width: responsiveWidth(27.5), backgroundColor: '#D95500', borderRadius: 25, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontFamily: 'Poppins-Regular', color: 'white' }}>Get started</Text>
                    </View>
                )
            }}
            renderNextButton={() => {
                return (
                    <View style={{ height: responsiveHeight(6), width: responsiveHeight(6), backgroundColor: '#D95500', borderRadius: 25, justifyContent: 'center', alignItems: 'center' }}>
                        <Icon name='angle-right' type='font-awesome' color='white' />
                    </View>
                )
            }}
            renderPrevButton={() => {
                return (
                    <View style={{ height: responsiveHeight(6), width: responsiveHeight(6), backgroundColor: '#D95500', borderRadius: 25, justifyContent: 'center', alignItems: 'center' }}>
                        <Icon name='angle-left' type='font-awesome' color='white' />
                    </View>
                )
            }}
            showPrevButton
            dotStyle={{ backgroundColor: 'white', borderColor: '#D95500', borderWidth: 1, width: 15, height: 15, borderRadius: 15 }}
            activeDotStyle={{ backgroundColor: '#D95500', width: 15, height: 15, borderRadius: 15 }} />
    )



}


export default IntroScreen;