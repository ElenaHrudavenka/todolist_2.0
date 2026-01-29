import styles from '@/pages/Home/index.module.scss'
import { TodolistItem } from "@/shared/ui/TodolistItem";
import { v4 } from 'uuid';
import { useRef, useState } from "react";
import { Header } from '@/shared/ui/Header';
import type { Filter } from '@/shared/ui/TodolistItem/models/types';

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

    const [filter, setFilter] = useState<Filter>('all');
    const [inputValue, setInputValue] = useState('');

    const removeTask = (taskId: string) => {
        setTasks(prev => prev.filter(task => task.id !== taskId))
    };

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
    };

    const filterTasks = (filter: Filter) => {
        setFilter(filter);
    };

    const filtredTasks = tasks.filter(task =>{
        if (filter === 'active') return  !task.isDone;
        if (filter === 'done') return task.isDone;
        return true;
    });

    const changeTaskStatus = (id: string) => {
        setTasks(tasks.map(task => id === task.id ? {...task, isDone: !task.isDone} : task ))
    };

    return (
        <div className={styles.app}>
            <Header />
            <TodolistItem
                title="WHAT TO DO"
                tasks={filtredTasks}
                inputValue={inputValue}
                setInputValue={setInputValue}
                removeTask={removeTask}
                addTask={addTask}
                filterTasks={filterTasks}
                changeTaskStatus={changeTaskStatus}
                inputRef={inputRef}
            />
        </div>
    )
};

export { Home };
