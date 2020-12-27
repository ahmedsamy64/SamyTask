import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { observer, inject } from 'mobx-react';
import { observable } from 'mobx';

@inject('store')
@observer
class CartScreen extends Component {

    render() {
        return (
            <View>
                <Text>{this.props.store.CartArray}</Text>
            </View>
        );
    }



}

export default CartScreen;