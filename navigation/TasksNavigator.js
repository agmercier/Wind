import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screens/HomeScreen";
import AddTaskScreen from "../screens/AddTaskScreen";

const Stack = createStackNavigator();
const TasksNavigator = () => (
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='Home' component={HomeScreen}/>
        <Stack.Screen name='AddTask' component={AddTaskScreen}/>
    </Stack.Navigator>
);

export default TasksNavigator;