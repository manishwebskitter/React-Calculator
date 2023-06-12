import React, { useEffect, useState } from 'react'
import MyView from '../components/NativeComponents/MyView';
import MyText from '../components/NativeComponents/MyText';
import { Dimensions, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import css from '../assets/css/css';
import normalize from 'react-native-normalize';
import font from '../theme/fonts';
import { useNavigation } from '@react-navigation/native';
import colors from '../theme/colors';
import { Rating, AirbnbRating } from 'react-native-ratings';
import icons from '../theme/icons';

const ProductDetails = ({ route, navigation }) => {

    const item = route.params;
    const [proData, setProData] = useState(route.params)


    const _ratingCompleted = (rating) => {
        console.log(rating);
    }

    console.log("proData", proData?.image);
    return (
        <MyView style={[css.p2, css.f1]}>
            <SafeAreaView>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={icons.backIcon} style={styles.backIconStyle} />
                </TouchableOpacity>
                <MyView style={styles.imgContainerStyle}>
                    <Image source={{ uri: proData?.image }} style={styles.imgStyle} />
                </MyView>
                <MyView style={[css.mt4, css.px3]}>
                    <MyView style={[css.rowBetweenCenter]}>
                        <MyText style={[styles.titleStyle, css.w60]}>{proData?.title}</MyText>
                        <MyText style={[css.mt2, styles.catStyle]}>{proData?.category}</MyText>
                    </MyView>
                    <MyText style={[styles.titleStyle, css.mt2]}>₹ {proData?.price}</MyText>
                    <Rating
                        type='star'
                        ratingCount={5}
                        imageSize={25}
                        readonly
                        startingValue={proData?.rating.rate}
                        onFinishRating={_ratingCompleted}
                        style={[css.mt1, { width: 120 }]}
                    />
                    <MyText style={[css.mt2]}>{proData?.description}</MyText>

                </MyView>
            </SafeAreaView>
        </MyView>
    )
}

export default ProductDetails

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

const styles = StyleSheet.create({
    imgContainerStyle: {
        width: width - 16,
        height: normalize(250),
    },
    imgStyle: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    },
    titleStyle: {
        fontFamily: font.LatoBold,
        marginRight: normalize(30)
    },
    catStyle: {
        fontFamily: font.LatoBlack,
        color: colors.primary
    },
    backIconStyle: {
        width: normalize(30),
        height: normalize(30),
        resizeMode: 'contain'
    }
})