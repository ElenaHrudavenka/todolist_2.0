import styles from './TodolistItem.module.scss'

export const TodolistItem = () => {
    return (
        <div className={styles.itemContainer}>
            <h3>What to do</h3>
            <div className={styles.inputContainer}>
                <input type="text"/>
                <button>X</button>
            </div>
            <ul>
                <li>
                    <input type="checkbox" checked={true} onChange={()=>{}}/> <span>Task1</span>
                </li>
                <li>
                    <input type="checkbox" checked={true} onChange={()=>{}}/> <span>Task2</span>
                </li>
                <li>
                    <input type="checkbox" checked={false} onChange={()=>{}}/> <span>Task3</span>
                </li>
            </ul>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    )
}