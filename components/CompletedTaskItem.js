import React from 'react';

import TaskItem from './TaskItem';

export default function CompletedTaskItem({...props}) {
  return (
    <TaskItem {...props} checked style={{opacity: 0.5}}/> 
  );
}
