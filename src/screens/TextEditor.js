import { Image, SafeAreaView, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import css from '../assets/css/css'
import icons from '../theme/icons'
import normalize from 'react-native-normalize'
import MyText from '../components/NativeComponents/MyText'
import MyInput from '../components/NativeComponents/MyInput'

const TextEditor = ({ props }) => {
    return (
        <View style={[styles.containerStyle, css.p4]}>
            <SafeAreaView>
                <View style={[styles.border, css.mt10]}>
                    <View style={[styles.headerStyle]}>
                        <TouchableOpacity style={[css.f1]}>
                            <Image source={icons.bold} style={[styles.iconStyle]} />
                        </TouchableOpacity>
                        <TouchableOpacity style={[css.f1]}>
                            <Image source={icons.italic} style={[styles.iconStyle]} />
                        </TouchableOpacity>
                        <TouchableOpacity style={[css.f1]}>
                            <Image source={icons.colortext} style={[styles.iconStyle]} />
                        </TouchableOpacity>
                        <TouchableOpacity style={[css.f1]}>
                            <Image source={icons.underline} style={[styles.iconStyle]} />
                        </TouchableOpacity>
                        <TouchableOpacity style={[css.f1]}>
                            <Image source={icons.strikethrough} style={[styles.iconStyle]} />
                        </TouchableOpacity>
                        <TouchableOpacity style={[css.f1]}>
                            <Image source={icons.left} style={[styles.iconStyle]} />
                        </TouchableOpacity>
                        <TouchableOpacity style={[css.f1]}>
                            <Image source={icons.center} style={[styles.iconStyle]} />
                        </TouchableOpacity>
                        <TouchableOpacity style={[css.f1]}>
                            <Image source={icons.right} style={[styles.iconStyle]} />
                        </TouchableOpacity>
                        <TouchableOpacity style={[css.f1]}>
                            <Image source={icons.link} style={[styles.iconStyle]} />
                        </TouchableOpacity>
                        <TouchableOpacity style={[css.f1]}>
                            <Image source={icons.color} style={[styles.iconStyle]} />
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.panel]}>
                        <MyInput style={[styles.inputStyle]} />
                    </View>
                </View>
            </SafeAreaView>
        </View>
    )
}

export default TextEditor

const styles = StyleSheet.create({
    border: {
        borderWidth: 0.5,
    },
    headerStyle: {
        borderBottomWidth: 0.5,
        paddingVertical: normalize(10),
        paddingHorizontal: normalize(5),
        flexDirection: 'row',
    },
    iconStyle: {
        width: normalize(20),
        height: normalize(20),
        resizeMode: 'contain'
    },
    panel: {
        minHeight: normalize(100)
    },
    inputStyle: {
        backgroundColor: 'yellow',
        flex: 1,
        verticalAlign: 'top',
        justifyContent: 'flex-start'
    }
})