import React from 'react';
import { View, StyleSheet,  TouchableHighlight } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import colors from '../config/colors';
import ColorCircle from './ColorCircle';
import AppText from './AppText';

export default function TaskItem({task, handleUpdateTask, renderRightActions, handleCompleteTask, style, checked=false}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.dark4} onPress={() => handleUpdateTask(task)}>
        <View style={[styles.container, style]}>         
            <ColorCircle size={30} color={'red'} checked={checked} onPress={() => handleCompleteTask(task)}/>
          <AppText style={styles.title}>{task.title}</AppText>
        </View>
      </TouchableHighlight>
    </Swipeable>
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: colors.dark1,
    borderWidth: 1,
    borderColor: colors.dark3,
    padding: 10,
    alignItems: 'center',
    },
  title: {
    paddingLeft: 10,
    },
   
});