import React, {useState} from 'react';
import { View, StyleSheet, TextInput, Button } from 'react-native';

import Screen from '../components/Screen';
import useApi from '../hooks/useApi';
import AppForm from '../components/forms/AppForm';
import AppFormInput from '../components/forms/AppFormInput';
import SubmitButton from '../components/forms/SubmitButton';
import ColorCircle from '../components/ColorCircle';

export default function AddTaskScreen({navigation, route}) {
  const initialValues = route.params ? route.params : {title: '', description: '', completed: 0, date: new Date()};
  const {addTask, updateTask} = useApi();

  const handleSubmit = async (task) => {
    route.params ? await updateTask(task) : await addTask(task);
    navigation.navigate('Home');
  }

  return (
    <Screen style={styles.container}>
      <AppForm 
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        <View style={styles.titleContainer}>
          <ColorCircle color={'red'} size={40} style={{paddingRight: 10}}/>
          <AppFormInput name="title" placeholder="Title" defaultValue={initialValues.title} style={{width: '90%'}}/>
        </View>
        <AppFormInput name="description" placeholder="Description" defaultValue={initialValues.description}/>
        <SubmitButton title="Add Task"/>
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    },
    titleContainer: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      marginBottom: 10,
      padding: 10,
    },
});