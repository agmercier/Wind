import React from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import TaskItem from './TaskItem';
import ListItemDeleteAction from './ListItemDeleteAction';

export default function TaskList({tasks, handleUpdateTask, deleteTask, handleCompleteTask, ListItem}) {
  return (
    <View style={styles.container}>
      <FlatList  data={tasks} keyExtractor={item => item.id.toString()} renderItem={({item}) => 
        <ListItem task={item} handleUpdateTask={handleUpdateTask} handleCompleteTask={handleCompleteTask} renderRightActions={() => <ListItemDeleteAction onPress={() => deleteTask(item)}/>}/>}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    }
});