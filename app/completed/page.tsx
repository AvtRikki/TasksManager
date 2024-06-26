"use client";
import React from 'react'
import { useGlobalState } from '../Context/globalProvider';
import Tasks from '../Components/Tasks/Tasks';

const completed = () => {
  const { completedTasks } = useGlobalState();
  return (
    <Tasks title="Completed Tasks" tasks={completedTasks} />
  )
}

export default completed