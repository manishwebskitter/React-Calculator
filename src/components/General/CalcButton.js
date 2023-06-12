import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import MyText from '../NativeComponents/MyText'
import normalize from 'react-native-normalize'
import font from '../../theme/fonts'

const CalcButton = (props) => {
    return (
        <TouchableOpacity {...props} style={[styles.btnStyle]} onPress={props.onPress}>
            <MyText style={styles.btnText}>{props.title}</MyText>
        </TouchableOpacity>
    )
}

export default CalcButton

const styles = StyleSheet.create({
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
    }
})