"use client";
import React from 'react'
import { useGlobalState } from '../Context/globalProvider';
import Tasks from '../Components/Tasks/Tasks';

const important = () => {
  const { importantTasks } = useGlobalState();
  return (
    <Tasks title="Important Tasks" tasks={importantTasks} />
  )
}

export default important;