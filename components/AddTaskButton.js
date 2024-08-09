import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../config/colors';

export default function AddTaskButton({onPress}) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
        <MaterialCommunityIcons name='plus' color={colors.white} size={50}/>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary0,
    position: 'absolute',
    height: 70,
    width: 70,
    borderRadius: 35,
    alignSelf: 'center',
    top: '95%',
    justifyContent: 'center',
    alignItems: 'center',
    }
});