import { StyleSheet, Text, View } from 'react-native'
import styled from 'styled-components/native';
import React from 'react'

const MyView = (props) => {

    const CustomView = styled.View`
    background-color: white;  
  `;

    return (
        <CustomView {...props} style={[styles.viewStyle, props.style]}>{props.children}</CustomView>
    )
}

export default MyView

const styles = StyleSheet.create({
})