import React from 'react'
import Constants from 'expo-constants'
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native'
import colors from '../config/colors'


export default function Screen({children, style}) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
        {children}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    screen: {
        paddingTop: Constants.statusBarHeight,
        flex: 1,
        backgroundColor: colors.dark0,
    }
})