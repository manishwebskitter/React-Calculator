import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import css from '../assets/css/css'
import Header from '../components/General/Header'
import MyInput from '../components/NativeComponents/MyInput'
import normalize from 'react-native-normalize'
import CalcButton from '../components/General/CalcButton'
import MyText from '../components/NativeComponents/MyText'
import font from '../theme/fonts'

const Calculator = (props) => {

    const [inputText, setInputText] = useState()
    const [outputText, setOutputText] = useState()

    const CalcButton = (props) => {
        return (
            <TouchableOpacity {...props} style={[styles.btnStyle]} onPress={props.onPress}>
                <MyText style={styles.btnText}>{props.title}</MyText>
            </TouchableOpacity>
        )
    }

    return (
        <View style={[css.container]}>
            <SafeAreaView style={[css.container]}>
                <Header />
                <View style={[styles.panel, css.px2, css.f1]}>
                    <View style={[styles.displayStyle]}>
                        <MyInput placeholder="" multiline style={[styles.inputStyle]} value={inputText} onChangeText={(val) => setInputText(val)} />
                    </View>
                    <View style={css.mb10 }>
                        <View style={[styles.buttomContainerRow, css.mt6]}>
                            <CalcButton activeOpacity={0.6} title="7" />
                            <CalcButton activeOpacity={0.6} title="8" />
                            <CalcButton activeOpacity={0.6} title="9" />
                            <CalcButton activeOpacity={0.6} title="/" />
                        </View>
                        <View style={[styles.buttomContainerRow, css.mt6]}>
                            <CalcButton activeOpacity={0.6} title="4" />
                            <CalcButton activeOpacity={0.6} title="5" />
                            <CalcButton activeOpacity={0.6} title="6" />
                            <CalcButton activeOpacity={0.6} title="*" />
                        </View>
                        <View style={[styles.buttomContainerRow, css.mt6]}>
                            <CalcButton activeOpacity={0.6} title="1" />
                            <CalcButton activeOpacity={0.6} title="2" />
                            <CalcButton activeOpacity={0.6} title="3" />
                            <CalcButton activeOpacity={0.6} title="-" />
                        </View>
                        <View style={[styles.buttomContainerRow, css.mt6]}>
                            <CalcButton activeOpacity={0.6} title="." />
                            <CalcButton activeOpacity={0.6} title="0" />
                            <CalcButton activeOpacity={0.6} title="=" />
                            <CalcButton activeOpacity={0.6} title="+" />
                        </View>
                    </View>
                </View>

            </SafeAreaView>
        </View>
    )
}

export default Calculator

const styles = StyleSheet.create({
    displayStyle: {
        backgroundColor: '#e7e7e7e7',
        padding: 10,
        flex: 1,
    },
    buttomContainerRow: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    btnStyle: {
        backgroundColor: '#e7e7e7e7',
        width: normalize(60),
        height: normalize(60),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6
    },
    btnText: {
        fontFamily: font.LatoBlack,
        fontSize: normalize(18)
    },
    inputStyle:{
        textAlign: "right",
        flex: 1,
    }
})