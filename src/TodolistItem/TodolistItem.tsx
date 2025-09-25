import styles from './TodolistItem.module.scss'
import type {Task} from "../App.tsx";
import {Button} from "../Button/Button.tsx";

type TodolistItemProps = {
    title: string,
    tasks: Array<Task>
}

export const TodolistItem = ({title, tasks}: TodolistItemProps) => {
    return (
        <div className={styles.itemContainer}>
            <h3>{title}</h3>
            <div className={styles.inputContainer}>
                <input type="text"/>
                <Button title="x"/>
            </div>
            { tasks.length ===0 ? (
                <p>There is no task</p>
                ) : (
                <ul>
                    {
                        tasks.map((task:Task) => {
                            return (
                                <li key={task.id}>
                                    <input type="checkbox" checked={task.isDone} onChange={()=>{}}/>
                                    <span>{task.title}</span>
                                    <Button title="x"/>
                                </li>
                            )
                        })
                    }
                </ul>
            )}
            <div>
                <Button title="All"/>
                <Button title="Active"/>
                <Button title="Completed"/>
            </div>
        </div>
    )
}