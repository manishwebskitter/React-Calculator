import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import MyView from '../NativeComponents/MyView'
import normalize from 'react-native-normalize';
import MyText from '../NativeComponents/MyText';
import css from '../../assets/css/css';
import font from '../../theme/fonts';

const ProductCard = (props) => {


    // {
    //     "id": 1,
    //     "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    //     "price": 109.95,
    //     "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    //     "category": "men's clothing",
    //     "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    //     "rating": {
    //         "rate": 3.9,
    //         "count": 120
    //     }
    // }

    return (
        <TouchableOpacity activeOpacity={0.8} style={[styles.cardStyle, props.cardStyle]} onPress={props.onPress}>
            <MyView style={[styles.imageArea, css.p3]}>
                <Image source={props.url} style={[styles.imageStyle]} />
            </MyView>
            <MyView style={[css.p2]}>
                <MyText style={[styles.titleStyle]}>{props.title}</MyText>
            </MyView>
        </TouchableOpacity>
    )
}

export default ProductCard

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

const styles = StyleSheet.create({
    cardStyle: {
        borderRadius: 6,
        borderWidth: 0.5,
        borderColor: '#9BABB8',
        overflow: 'hidden',
    },
    imageStyle: {
        width: width / 4,
        height: 100,
        resizeMode: 'contain'
    },
    titleStyle: {
        fontFamily: font.LatoBold,
    }
})