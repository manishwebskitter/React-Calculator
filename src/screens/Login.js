import React, { useEffect, useState } from 'react'
import css from '../assets/css/css'
import Input from '../components/NativeComponents/Input'
import icons from '../theme/icons';
import colors from '../theme/colors';
import normalize from 'react-native-normalize';
import font from '../theme/fonts';
import MyView from '../components/NativeComponents/MyView';
import MyText from '../components/NativeComponents/MyText';
import MyInput from '../components/NativeComponents/MyInput';
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Dimensions,
    Image,
    TouchableOpacity,
    Appearance
} from 'react-native'

const Login = () => {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [sysTheme, setSysTheme] = useState(Appearance.getColorScheme())

    // const asd = require('../assets/animation/login.json')
    // console.log("animation", icons.loginicon);

    useEffect(() => {
        console.log("sysTheme", sysTheme);
    }, [sysTheme])

    const themeColorScheme = {
        // backgroundColor: '#000',
    }

    return (
        <SafeAreaView style={[css.f1]}>
            <MyView style={[css.p5, css.f1]}>
                <View style={[styles.iconWrap, css.mb5]}>
                    <Image
                        source={icons.logingif}
                        style={{ width: '100%', height: '100%', resizeMode: 'contain' }}
                    />
                </View>
                <Input
                    title="Name"
                    placeholder="Enter Name"
                    containerStyle={[css.mb9]}
                    value={name}
                    onChangeText={(val) => setName(val)}
                />
                <Input
                    title="Email"
                    placeholder="Enter Email"
                    containerStyle={[css.mb9]}
                    value={email}
                    onChangeText={(val) => setEmail(val)}
                />
                <TouchableOpacity style={[styles.btnStyle]}>
                    <MyText style={[styles.btnTextStyle]}>Login</MyText>
                </TouchableOpacity>
            </MyView>
        </SafeAreaView>
    )
}

export default Login

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

const styles = StyleSheet.create({
    iconWrap: {
        height: height / 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnStyle: {
        backgroundColor: colors.light,
        height: normalize(45),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    btnTextStyle: {
        fontFamily: font.LatoBold,
        fontSize: normalize(19)
    }
})