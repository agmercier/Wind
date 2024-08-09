import React from 'react';
import { View, StyleSheet, TouchableHighlight } from 'react-native';
import colors from '../config/colors';

export default function ColorCircle({size, color, checked, onPress, style}) {
  return (
    <TouchableHighlight underlayColor={colors.primary5} onPress={onPress} style={[{borderRadius: size/2}, style]}>
        <View style={[styles.container, {height: size, width: size, borderRadius: size/2, borderColor: color}, style]}>
            {checked && <View style={{height: size-10, width: size-10, borderRadius: (size-10)/2, backgroundColor: colors.dark4}}></View>}   
        </View>
      </TouchableHighlight>
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.dark0,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    }
});