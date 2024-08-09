import React from 'react'
import {View} from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import { TouchableHighlight } from 'react-native-gesture-handler'
import colors from '../../config/colors'

export default function Icon({name, size=40, backgroundColor='#000', iconColor='#fff', onPress, style}) {
  return (
    <TouchableHighlight underlayColor={colors.dark5} onPress={onPress} style={[{borderRadius: size/2}, style]}>
    <View style={[{width: size, height: size, borderRadius: size/2, backgroundColor: backgroundColor, justifyContent: 'center', alignItems: 'center',}, style]}>
            <MaterialCommunityIcons name={name} size={size*0.5} color={iconColor}/>
    </View>
    </TouchableHighlight>
  )
}

