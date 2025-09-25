import styles from './Button.module.scss'

type ButtonProps = {
    title: string,
}
export const Button = ({title}: ButtonProps) => {
    return (
        <button className={styles.buttonContainer}>{title}</button>
    );
};

