import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { styled } from 'styled-components/native';
import font from '../../theme/fonts';

const MyText = (props) => {



    const defaultStyle = {
        fontFamily: font.LatoRegular,
        // color: 'red',
    }

    return (
        <Text {...props} style={[{ ...defaultStyle }, props.style]}>
            {props.children}
        </Text>
    )
}

export default MyText

const styles = StyleSheet.create({
    // defaultStyle:{
    //     color: 'white',
    // }
})