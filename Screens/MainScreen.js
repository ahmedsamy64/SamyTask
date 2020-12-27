import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ImageBackground, Alert, ActivityIndicator } from 'react-native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { Icon } from 'react-native-elements'
import taskApi from '../api/taskApi'

function MainScreen({ navigation }) {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)

    const CategoryItem = (props) => {
        return (
            <TouchableOpacity onPress={props.onPress}>
                <ImageBackground source={{ uri: props.picUrl }} style={{ height: responsiveHeight(19.6), width: responsiveWidth(43), justifyContent: 'flex-end' }} imageStyle={{ borderRadius: 5 }}>
                    <Text style={{ color: 'white', fontFamily: 'Poppins-Regular', fontSize: responsiveFontSize(3), margin: 10 }}>{props.name}</Text>
                </ImageBackground>
            </TouchableOpacity>
        )
    }
    const getData = async () => {
        try {
            const response = await taskApi.get().then((res) => setData(res.data)).then(() => setLoading(false))
        }
        catch (error) {
            Alert.alert(error);
        }
    }
    const Pics = [
        {
            id: "0",
            url: require('../assets/image1.png'),
        }, {
            id: "1",
            url: require('../assets/image2.png'),
        }, {
            id: "2",
            url: require('../assets/image3.png'),
        }
    ]
    useEffect(() => {
        getData()
    }, [])

    return (
        <View style={{ /* backgroundColor: 'white' */ }}>
            {/* Same header as meat_seafoodScreen but hide the text and place menu */}
            <View style={{ height: responsiveHeight(11.5), backgroundColor: 'white' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: responsiveHeight(6) }}>
                    <Icon name='menu' type='feather' color='#2B88C9' size={responsiveWidth(7)} iconStyle={{ marginBottom: 5 }} onPress={() => navigation.toggleDrawer()} />
                    <Text style={{ color: 'white', fontSize: responsiveFontSize(3.3), marginLeft: responsiveWidth(13), fontFamily: 'Poppins-Regular' }}>Meat {"&"} Seafood</Text>
                    <Icon name='search' type='feather' color='#2B88C9' size={responsiveWidth(7)} style={{ marginLeft: responsiveWidth(3) }} onPress={() => navigation.navigate('Search')} />
                    <Icon name='shopping-cart' type='font-awesome' color='#2B88C9' size={responsiveWidth(7)} iconStyle={{ marginLeft: responsiveWidth(3) }} onPress={() => navigation.navigate('Cart')} />
                </View>
            </View>
            {/* Slider with static images */}
            <Carousel
                data={Pics}
                renderItem={({ item }) => {
                    return (
                        //render all pics and if the id equal something then render some text
                        <TouchableOpacity>
                            <ImageBackground style={{ height: responsiveHeight(32), width: responsiveWidth(100), justifyContent: 'center' }} source={item.url}>
                                {item.id == 1 ?
                                    <View style={{ width: responsiveWidth(30), marginLeft: responsiveWidth(10) }}>
                                        <Text style={{ color: 'white', fontFamily: 'Poppins-Bold', fontSize: responsiveFontSize(6), lineHeight: responsiveHeight(7), alignSelf: 'center' }}>20%</Text>
                                        <Text style={{ color: 'white', fontFamily: 'Poppins-Light', fontSize: responsiveFontSize(2.5), lineHeight: responsiveHeight(3), alignSelf: 'center' }}>Discount</Text>
                                    </View>
                                    : null}
                            </ImageBackground>
                        </TouchableOpacity>
                    );
                }}
                firstItem={1}
                sliderWidth={responsiveWidth(100)}
                itemWidth={responsiveWidth(100)}
                enableSnap
                onSnapToItem={(index) => { setPage(index) }}
                loop
                initialScrollIndex={0}
            />
            {/* the paging of the carosel */}
            <Pagination
                dotsLength={Pics.length}
                activeDotIndex={page}
                containerStyle={{ position: 'absolute', alignSelf: 'center', top: responsiveHeight(36) }}
                dotStyle={{
                    width: responsiveHeight(1.7),
                    height: responsiveHeight(1.7),
                    borderRadius: 10,
                    marginHorizontal: -2
                }}
                inactiveDotStyle={{
                    borderColor: '#D95500',
                    borderWidth: 1,
                    width: responsiveHeight(1.7),
                    height: responsiveHeight(1.7),
                    borderRadius: 10
                }}
                dotColor='#D95500'
                inactiveDotColor='white'
                inactiveDotOpacity={1}
                inactiveDotScale={1}
            />
            { loading ? <View style={{ flex: 1, backgroundColor: '#fff', alignItems: 'center', alignItems: 'center', justifyContent: 'center' }}>
                <ActivityIndicator size="large" color="#D95500" />
                <Text>Data is Being Loaded</Text>
            </View> :
                <>
                    {/* Vegetables and fruits */}
                    <View style={{ flexDirection: 'row', marginVertical: responsiveHeight(1.4), justifyContent: 'space-around' }}>
                        <CategoryItem name='Vegetables' picUrl={data[0].category_img} />
                        <CategoryItem name='Fruits' picUrl={data[1].category_img} />
                    </View>
                    {/* pinapple */}
                    <ImageBackground source={require('../assets/wideImg.png')} style={{ height: responsiveHeight(11), width: responsiveWidth(87), alignSelf: 'center', justifyContent: 'center' }} imageStyle={{ borderRadius: 5 }}>
                        <Text style={{ marginLeft: responsiveWidth(12), color: 'black', fontFamily: 'Poppins-Regular', fontSize: responsiveFontSize(2) }}>Wide Image</Text>
                    </ImageBackground>
                    {/* Meats and seafood */}
                    <View style={{ flexDirection: 'row', marginVertical: responsiveHeight(1.4), justifyContent: 'space-around' }}>
                        <CategoryItem name='Meats' picUrl={data[2].category_img} onPress={() => navigation.navigate('Meat_Seafood')} />
                        <CategoryItem name='Seafood' picUrl={data[3].category_img} onPress={() => navigation.navigate('Meat_Seafood')} />
                    </View>
                </>}


        </View>
    );
}

export default MainScreen;