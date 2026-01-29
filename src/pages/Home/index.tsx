import styles from '@/pages/Home/index.module.scss'
import { TodolistItem } from "@/shared/ui/TodolistItem";
import { v4 } from 'uuid';
import { useRef, useState } from "react";
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
    ]);

    const [inputValue, setInputValue] = useState('');

    const removeTask = (taskId: string) => {
        setTasks(prev => prev.filter(task => task.id !== taskId))
    }

    const inputRef = useRef<HTMLInputElement | null>(null);

    const addTask = (inputValue: string) => {
        setTasks(prev => ([
            ...prev,
            {
                id: v4(),
                title: inputValue,
                isDone: false,
            }
        ]));

        setInputValue('');
        inputRef.current?.focus();
    }

    return (
        <div className={styles.app}>
            <Header />
            <TodolistItem
                title="WHAT TO DO"
                tasks={tasks}
                inputValue={inputValue}
                setInputValue={setInputValue}
                removeTask={removeTask}
                addTask={addTask}
                inputRef={inputRef}
            />
        </div>
    )
};

export { Home };
