import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import css from '../assets/css/css'
import Lottie from 'lottie-react-native';
import MyText from '../components/NativeComponents/MyText'
import icons from '../theme/icons';
import normalize from 'react-native-normalize';

const Dashboard = ({ props, navigation }) => {

    const data = [
        {
            id: 1,
            title: 'Ecommerce',
            url: 'Ecommerce',
            icon: icons.ecom
        },
        {
            id: 2,
            title: 'Text Editor',
            url: 'TextEditor',
            icon: icons.textEditor
        },
        {
            id: 3,
            title: 'Calculator',
            url: 'Calculator',
            icon: icons.calculator
        },
        {
            id: 3,
            title: 'Clock',
            url: '',
            icon: icons.calculator
        },
    ]

    return (
        <View style={[css.container, css.p2]}>
            <Lottie source={icons.particles} autoPlay loop />
            <SafeAreaView>
                <View style={[css.row, css.fWrap]}>
                    {
                        data?.map((item) =>
                            <TouchableOpacity style={[styles.cardStyle]} onPress={() => navigation.navigate(item.url)}>
                                <Image style={[styles.iconStyle]} source={item.icon} />
                                <MyText>{item.title}</MyText>
                            </TouchableOpacity>
                        )
                    }
                </View>
            </SafeAreaView>
        </View>
    )
}

export default Dashboard

const styles = StyleSheet.create({
    cardStyle: {
        backgroundColor: '#e7e7e7e7',
        margin: 8,
        flex: 1,
        aspectRatio: 1 / 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        minWidth: '40%',
    },
    iconStyle: {
        width: normalize(25),
        height: normalize(25),
        marginBottom: normalize(16)
    }
})