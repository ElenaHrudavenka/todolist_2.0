import styles from '@/shared/ui/Button/index.module.scss'
import type { ReactNode } from 'react';

interface ButtonProps {
    title?: string;
    width?: string;
    onClick?: () => void;
    children?: ReactNode;
}

const Button = ({ title, width, onClick, children }: ButtonProps) => {
    return (
        <button
            className={styles.buttonContainer}
            style={{ width }}
            onClick={onClick}
        >
            {children ?? title}
        </button>
    );
};

export { Button };
