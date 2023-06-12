import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const MyInput = (props) => {

    const defaultStyles = {
        textAlign: 'right',
    }

    return (
        <TextInput style={[{ ...defaultStyles }, props.style]} {...props} />
    )
}

export default MyInput

const styles = StyleSheet.create({})