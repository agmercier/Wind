import React, {useEffect} from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { useIsFocused } from '@react-navigation/native';

import useApi from '../hooks/useApi';
import Screen from '../components/Screen';
import AppText from '../components/AppText';

export default function AccountScreen() {
  const {tasks,  initDatabase, getTasks, addTask, updateTask, deleteTask, deleteDatabase } = useApi();

  const isFocused = useIsFocused();
  useEffect(() => {
    isFocused && getTasks();
  }
  , [isFocused]);

  return (
    <Screen style={styles.container}>
       <AppText>Account Screen</AppText>
       <Button title="Get" onPress={() => console.log(getTasks())} />
        <Button title="Add" onPress={() => console.log(addTask({title: 'Do this', description: 'ez'}))} />
        <Button title="Delete" onPress={() => console.log(deleteTask(tasks[0]))} />
        <Button title="Update" onPress={() => console.log(updateTask({...tasks[0], title: 'Do this later', description: 'hard'}))} />
        <Button title="Reset" onPress={() => console.log(deleteDatabase())} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    }
});