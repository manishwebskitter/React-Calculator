import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import icons from '../../theme/icons'
import normalize from 'react-native-normalize'
import css from '../../assets/css/css'

const Header = ({ props, navigation }) => {
  return (
    <View style={[css.my2]}>
      <TouchableOpacity onPress={() => props.navigation.goBack()}>
        <Image source={icons.backIcon} style={styles.backIconStyle} />
      </TouchableOpacity>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  backIconStyle: {
    width: normalize(30),
    height: normalize(30),
    resizeMode: 'contain'
  }
})