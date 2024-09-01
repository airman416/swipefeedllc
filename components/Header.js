import styles from './Header.module.css';

export default function Header() {
    return (
        <div className={styles.mainText}>
            <span className={styles.redText}>SwipeFeed</span>
            <span className={styles.blackText}> coming soon.</span>
            <br/>
            <button className={styles.linkButton} onClick={() => window.open('https://forms.gle/Am3wDdfDC89wDHCf7', '_blank')}>
                Join the Waitlist
            </button>
        </div>
    );
}
