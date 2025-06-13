import styles from './Header.module.css';

export default function Header() {
    return (
        <div className={styles.mainText}>
            <span className={styles.redText}>SwipeFeed</span>
        </div>
    );
}