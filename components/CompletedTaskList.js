import React, {useState} from 'react';
import { View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';
import TaskList from './TaskList';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import DropDown from './DropDown';

export default function CompletedTaskList({...props}) {
    const [displayList, setDisplayList] = useState(false);
  return (
    <>
    <DropDown onPress={() => setDisplayList(!displayList)} displayList={displayList}/>
    {displayList && <TaskList {...props}/>}
    </>
    
  );
}

const styles = StyleSheet.create({
  container: { 
      justifyContent: 'center',
        alignItems: 'center',
     }
});