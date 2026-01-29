import styles from '@/shared/ui/TodolistItem/index.module.scss';
import type { Task } from "@/pages/Home/index.tsx";
import { Button } from "@/shared/ui/Button";

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { filterOptions } from '@/shared/ui/TodolistItem/models/constants';
import type { RefObject } from 'react';
import type { Filter } from '@/shared/ui/TodolistItem/models/types';

interface TodolistItemProps {
    title: string;
    tasks: Array<Task>;
    inputValue: string;
    setInputValue: (inputValue: string) => void;
    removeTask: (id: string) => void;
    addTask: (inputValue: string) => void;
    filterTasks: (filter: Filter) => void;
    changeTaskStatus: (id: string) => void;
    inputRef: RefObject<HTMLInputElement | null>;
}

const TodolistItem = ({ title, tasks, inputValue, setInputValue, removeTask, addTask, filterTasks, changeTaskStatus, inputRef }: TodolistItemProps) => {
    return (
        <div className={styles.itemContainer}>
            <h3>{title}</h3>
            <div className={styles.inputContainer}>
                <input
                    type="text"
                    ref={inputRef}
                    value={inputValue}
                    onChange={e => setInputValue(e.target.value)}
                    onKeyDown={(e) => {
                        e.key === 'Enter' && addTask(inputValue);
                    }}
                />
                <Button
                    onClick={() => addTask(inputValue)}
                >
                    <AddIcon fontSize='medium' />
                </Button>
            </div>
            <hr />
            {tasks.length === 0 ? (
                <p>There is no task</p>
            ) : (
                <ul>
                    {
                        tasks.map((task: Task) => {
                            return (
                                <li key={task.id}>
                                    <div className={styles.item}>
                                        <input type="checkbox" checked={task.isDone} onChange={() => changeTaskStatus(task.id)} />
                                        <span>{task.title}</span>
                                    </div>
                                    <Button
                                        onClick={() => removeTask(task.id)}
                                    >
                                        <RemoveIcon fontSize='medium' />
                                    </Button>
                                </li>
                            )
                        })
                    }
                </ul>
            )}
            <div className={styles.filterButtonsContainer}>
                {
                    filterOptions.map(option => (
                        <Button
                            key={option.value}
                            title={option.label}
                            width={option.width}
                            onClick={() => filterTasks(option.value)}
                        />
                    ))
                }
            </div>
        </div>
    )
};

export { TodolistItem };
