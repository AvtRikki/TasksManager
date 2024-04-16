"use client";
import React from 'react'
import { useGlobalState } from '../Context/globalProvider';
import Tasks from '../Components/Tasks/Tasks';

const incomplete = () => {
  const { incompleteTasks } = useGlobalState();
  return (
    <Tasks title="To Do Tasks" tasks={incompleteTasks} />
  )
}

export default incomplete