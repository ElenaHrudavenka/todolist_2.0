import styles from './App.module.scss'
import {TodolistItem} from "./TodolistItem.tsx";

export const App = ()=> {
  return (
    <div className={styles.app}>
        <TodolistItem/>
    </div>
  )
}