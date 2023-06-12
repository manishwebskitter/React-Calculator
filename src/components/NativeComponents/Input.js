import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import css from '../../assets/css/css'
import font from '../../theme/fonts'
import normalize from 'react-native-normalize'
import MyText from './MyText'
import MyView from './MyView'

const Input = (props) => {

    const inputStyle = {
        height: normalize(45),
        paddingLeft: normalize(16)
    }

    return (
        <MyView style={props.containerStyle}>
            <MyText style={[styles.titleStyle]}>{props.title} :</MyText>
            <TextInput
                style={[{ ...inputStyle }, css.border, css.mt2, styles.inputStyle]}
                {...props}
            />
        </MyView>
    )
}

export default Input

const styles = StyleSheet.create({
    titleStyle: {
        fontFamily: font.LatoBold
    },
})