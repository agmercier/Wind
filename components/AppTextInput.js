import React from 'react'
import { View , StyleSheet, Platform, TextInput} from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import defaultStyles from '../config/styles'

export default function AppTextInput({icon, style, ...otherProps}) {
  return (
    <View style={[styles.container, style]}>
        {icon && <MaterialCommunityIcons name={icon} size={20} color={defaultStyles.colors.dark5} />}
        <TextInput placeholderTextColor={defaultStyles.colors.dark5} style={defaultStyles.text} {...otherProps}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: defaultStyles.colors.dark1,
        alignItems: 'center',
    },
})