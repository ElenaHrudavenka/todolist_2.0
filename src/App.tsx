import styles from './App.module.scss'
import {TodolistItem} from "./TodolistItem/TodolistItem.tsx";
import { v4 } from 'uuid';
import {useState} from "react";

export type Task = {
    id: string,
    title: string,
    isDone: boolean,
}
export const App = ()=> {

    const [tasks, setTasks] =  useState<Array<Task>>([
        {id: v4(), title: "Task1", isDone: false},
        {id: v4(), title: "Task2", isDone: true},
        {id: v4(), title: "Task3", isDone: false},
    ])

    const deleteTask = (taskId: string) => {
        setTasks(tasks.filter(task => task.id !== taskId))
    }

  return (
    <div className={styles.app}>
        <TodolistItem title="What to do" tasks={tasks} deleteTask={deleteTask}/>
    </div>
  )
}