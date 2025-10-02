import styles from './Button.module.scss'

type ButtonProps = {
    title: string,
    onClick?: () => void,
}
export const Button = ({title, onClick}: ButtonProps) => {
    return (
        <button className={styles.buttonContainer} onClick={onClick}>{title}</button>
    );
};

