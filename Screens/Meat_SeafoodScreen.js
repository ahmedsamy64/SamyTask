import React, { useState, useEffect } from 'react';
import { View, ScrollView, FlatList, TouchableOpacity, Text, ImageBackground, Image, ActivityIndicator } from 'react-native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { Icon } from 'react-native-elements'
import taskApi from '../api/taskApi'

function Meat_SeafoodScreen({ navigation }) {

    const [selectedCat, SetCat] = useState('Meat')
    const [data, setData] = useState([])
    const [added, setAdded] = useState(true)

    //What is inside the boxes which rendered
    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity style={{ borderColor: '#D4D4D4', borderBottomWidth: 2 }} onPress={() => navigation.navigate('ProductDetails', { name: item.name, img: item.product_img, weight: item.weight, price: item.price, })}>
                <Image source={{ uri: item.product_img }} style={{ alignSelf: 'center', margin: 10, width: responsiveWidth(30.5), height: responsiveHeight(10) }} />
                <Text style={{ fontFamily: 'Poppins-Bold', lineHeight: responsiveHeight(2), marginLeft: 10 }}>{item.name}</Text>
                <Text style={{ fontFamily: 'Poppins-Regular', lineHeight: responsiveHeight(2), marginLeft: 10 }}>{item.weight}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Text style={{ fontFamily: 'Poppins-Regular', lineHeight: responsiveHeight(2), marginLeft: 10, marginBottom: 5 }}>EGP {item.price}</Text>
                    <Icon name={added ? 'check-circle' : 'plus-circle'} type='font-awesome' iconStyle={{ marginBottom: 5, marginRight: 5 }} />
                </View>

            </TouchableOpacity>
        );
    };
    const getData = () => {
        const response = taskApi.get().then((res) => setData(res.data))
    }
    useEffect(() => {
        getData()
    }, [])

    return (
        <View >
            {/* the header with background image */}
            <ImageBackground source={require('../assets/Meat_Seafood.png')} style={{ width: responsiveWidth(100), height: responsiveHeight(34) }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: responsiveHeight(6) }}>
                    <Icon name='angle-left' type='font-awesome' color='white' size={responsiveWidth(8)} iconStyle={{ marginBottom: 5 }} onPress={() => navigation.goBack()} />
                    <Text style={{ color: 'white', fontSize: responsiveFontSize(3.3), marginLeft: responsiveWidth(13), fontFamily: 'Poppins-Regular' }}>Meat {"&"} Seafood</Text>
                    <Icon name='search' type='feather' color='white' size={responsiveWidth(7)} iconStyle={{ marginLeft: responsiveWidth(3) }} onPress={() => navigation.navigate('Search')} />
                    <Icon name='shopping-cart' type='font-awesome' color='white' size={responsiveWidth(7)} iconStyle={{ marginLeft: responsiveWidth(3) }} onPress={() => navigation.navigate('Cart')} />
                </View>
            </ImageBackground>
            {
                data.length == 0 ?
                    <View style={{ height: responsiveHeight(59), alignItems: 'center', justifyContent: 'center' }}>
                        <ActivityIndicator size="large" color="#D95500" />
                        <Text>Your Items is loading</Text>
                    </View>
                    :
                    <View style={{ flexDirection: 'row', height: responsiveHeight(59), justifyContent: 'center', backgroundColor: 'white' }}>
                        {/* Meat List */}
                        <View style={{ width: responsiveWidth(45) }} >
                            <TouchableOpacity onPress={() => SetCat('Meat')} style={{ justifyContent: 'center', height: responsiveHeight(5), borderWidth: 2, borderColor: 'white', borderBottomColor: selectedCat == 'Meat' ? '#D95500' : 'white' }}>
                                <Text style={{ fontFamily: 'Poppins-Regular', fontSize: responsiveFontSize(3), alignSelf: 'center', color: selectedCat == 'Meat' ? '#D95500' : 'black' }}>Meat</Text>
                            </TouchableOpacity>
                            <FlatList data={data[2].products} renderItem={renderItem} keyExtractor={(item) => item.id} showsVerticalScrollIndicator={false} />
                        </View>
                        <View style={{ borderRightWidth: 2, borderRightColor: '#D4D4D4', height: responsiveHeight(54.3), alignSelf: 'flex-end' }} />
                        {/* Seafood List */}
                        <View style={{ width: responsiveWidth(45) }}>
                            <TouchableOpacity onPress={() => SetCat('Fish')} style={{ justifyContent: 'center', height: responsiveHeight(5), borderWidth: 2, borderColor: 'white', borderBottomColor: selectedCat == 'Fish' ? '#D95500' : 'white' }}>
                                <Text style={{ fontFamily: 'Poppins-Regular', fontSize: responsiveFontSize(3), alignSelf: 'center', color: selectedCat == 'Fish' ? '#D95500' : 'black' }}>Fish</Text>
                            </TouchableOpacity>
                            <FlatList data={data[3].products} renderItem={renderItem} keyExtractor={(item) => item.id} showsVerticalScrollIndicator={false} />
                        </View>
                    </View>
            }
            {/* filter and sort btns (static) */}
            <View style={{ flexDirection: 'row', height: responsiveHeight(7), backgroundColor: '#D95500', justifyContent: 'space-around' }}>
                <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: 'white', fontSize: responsiveFontSize(3) }}>Sort By</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: 'white', fontSize: responsiveFontSize(3) }}>Filter</Text>
                </TouchableOpacity>
            </View>
        </View >
    );
}

export default Meat_SeafoodScreen;