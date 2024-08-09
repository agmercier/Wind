import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import AccountScreen from "../screens/AccountScreen";
import TasksNavigator from "./TasksNavigator";


const Tab = createBottomTabNavigator();
const AppNavigator = () => (
    <Tab.Navigator>
        <Tab.Screen 
            name='Tasks' 
            component={TasksNavigator}
            options={{
                tabBarIcon: ({color, size}) => <MaterialCommunityIcons name='home' color={color} size={size}/>,
                headerShown: false
            }}
        />
        <Tab.Screen 
            name='Account' 
            component={AccountScreen}
            options={{
                tabBarIcon: ({color, size}) => <MaterialCommunityIcons name='account' color={color} size={size}/>
            }}
        />
    </Tab.Navigator>
);

export default AppNavigator;