import styles from '@/pages/Home/index.module.scss'
import { TodolistItem } from "@/shared/ui/TodolistItem";
import { v4 } from 'uuid';
import { useState } from "react";
import { Header } from '@/shared/ui/Header';

export interface Task {
    id: string;
    title: string;
    isDone: boolean;
}

const Home = () => {
    const [tasks, setTasks] = useState<Array<Task>>([
        { id: v4(), title: "Task1", isDone: false },
        { id: v4(), title: "Task2", isDone: true },
        { id: v4(), title: "Task3", isDone: false },
    ])

    const removeTask = (taskId: string) => {
        setTasks(prev => prev.filter(task => task.id !== taskId))
    }

    return (
        <div className={styles.app}>
            <Header />
            <TodolistItem
                title="WHAT TO DO"
                tasks={tasks}
                removeTask={removeTask}
            />
        </div>
    )
};

export { Home };
