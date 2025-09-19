import styles from './App.module.scss'
import {TodolistItem} from "./TodolistItem.tsx";
import { v4 } from 'uuid';

export type Task = {
    id: string,
    title: string,
    isDone: boolean,
}
export const App = ()=> {
    const tasks1: Array<Task> = [
        {id: v4(), title: "Task1", isDone: false},
        {id: v4(), title: "Task2", isDone: true},
        {id: v4(), title: "Task3", isDone: false},
    ]
    const tasks2: Array<Task> = []
  return (
    <div className={styles.app}>
        <TodolistItem title="What to do" tasks={tasks1} />
        <TodolistItem title="What to read" tasks={tasks2} />
    </div>
  )
}