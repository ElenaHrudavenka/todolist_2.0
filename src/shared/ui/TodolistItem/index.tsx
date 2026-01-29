import styles from '@/shared/ui/TodolistItem/index.module.scss';
import type { Task } from "@/pages/Home/index.tsx";
import { Button } from "@/shared/ui/Button";

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { filterOptions } from '@/shared/ui/TodolistItem/models/constants';

interface TodolistItemProps {
    title: string;
    tasks: Array<Task>;
    removeTask: (id: string) => void;
}

const TodolistItem = ({ title, tasks, removeTask }: TodolistItemProps) => {
    return (
        <div className={styles.itemContainer}>
            <h3>{title}</h3>
            <div className={styles.inputContainer}>
                <input type="text" />
                <Button
                    onClick={() => { }}
                >
                    <AddIcon fontSize='medium'/>
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
                                        <input type="checkbox" checked={task.isDone} onChange={() => { }} />
                                        <span>{task.title}</span>
                                    </div>
                                    <Button
                                        onClick={() => removeTask(task.id)}
                                    >
                                        <RemoveIcon fontSize='medium'/>
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
                        />
                    ))
                }
            </div>
        </div>
    )
};

export { TodolistItem };
