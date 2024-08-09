import React, {useEffect, useState} from 'react';
import {  StyleSheet, Button } from 'react-native';
import { useIsFocused } from '@react-navigation/native';

import Screen from '../components/Screen';
import TaskList from '../components/TaskList';
import CalendarTopBar from '../components/CalendarTopBar';
import useApi from '../hooks/useApi';
import AddTaskButton from '../components/AddTaskButton';
import CompletedTaskList from '../components/CompletedTaskList';
import TaskItem from '../components/TaskItem';
import CompletedTaskItem from '../components/CompletedTaskItem';

export default function HomeScreen({navigation}) {
  const {tasks, initDatabase, addTask, deleteTask, updateTask} = useApi();
  const isFocused = useIsFocused();
  useEffect(() => {
    isFocused && initDatabase();
  }
  , [isFocused]);

  const handleAddTask = () => {
    navigation.navigate('AddTask')
  }

  const handleUpdateTask = (task) => {
    navigation.navigate('AddTask', task)
  }

  const handleDeleteTask = (task) => {
    deleteTask(task);
  }

  const handleCompleteTask = (task) => {
    // console.log('handle: ', task)
    updateTask({...task, completed: task.completed ? 0 : 1});
  }

  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <Screen>
        <CalendarTopBar selectedDate={selectedDate} setSelectedDate={setSelectedDate}/>
        <TaskList tasks={tasks.filter(t => t.completed == 0)} handleUpdateTask={handleUpdateTask} deleteTask={handleDeleteTask} handleCompleteTask={handleCompleteTask} ListItem={TaskItem}/>
        <CompletedTaskList tasks={tasks.filter(t => t.completed == 1)} handleUpdateTask={handleUpdateTask} deleteTask={handleDeleteTask} handleCompleteTask={handleCompleteTask} ListItem={CompletedTaskItem}/>
        <AddTaskButton onPress={handleAddTask}/>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    }
});