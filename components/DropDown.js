import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../config/colors';

export default function DropDown({onPress, displayList, size=50}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.container}>
            {!displayList && <MaterialCommunityIcons name='chevron-down' size={size} color={colors.white}/>}
            {displayList && <MaterialCommunityIcons name='chevron-up' size={size} color={colors.white}/>}
        </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    }
});