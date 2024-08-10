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
import { LogBox } from 'react-native';


export default function HomeScreen({navigation, route}) {
  LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
  ]);
  const {tasks, initDatabase, addTask, deleteTask, updateTask} = useApi();
  const isFocused = useIsFocused();
  useEffect(() => {
    isFocused && initDatabase();
    (isFocused && route.params && route.params.selectedDate) && setSelectedDate(new Date(route.params.selectedDate));
  }
  , [isFocused]);
  const [selectedDate, setSelectedDate] = useState(route.params && route.params.selectedDate ? new Date(route.params.selectedDate) : new Date());
  const handleAddTask = () => {
    navigation.navigate('AddTask', {selectedDate: selectedDate.toString()});
  }

  const handleUpdateTask = (task) => {
    navigation.navigate('AddTask', {task: task, selectedDate: selectedDate.toString()})
  }

  const handleDeleteTask = (task) => {
    deleteTask(task);
  }

  const handleCompleteTask = (task) => {
    updateTask({...task, completed: task.completed ? 0 : 1});
  }

 

  return (
    <Screen>
        <CalendarTopBar selectedDate={selectedDate} setSelectedDate={setSelectedDate}/>
        <TaskList tasks={tasks.filter(t => (t.completed == 0) && (t.date.toDateString() == selectedDate.toDateString()))} handleUpdateTask={handleUpdateTask} deleteTask={handleDeleteTask} handleCompleteTask={handleCompleteTask} ListItem={TaskItem}/>
        <CompletedTaskList tasks={tasks.filter(t => (t.completed == 1) && (t.date.toDateString() == selectedDate.toDateString()))} handleUpdateTask={handleUpdateTask} deleteTask={handleDeleteTask} handleCompleteTask={handleCompleteTask} ListItem={CompletedTaskItem}/>
        <AddTaskButton onPress={handleAddTask}/>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    }
});