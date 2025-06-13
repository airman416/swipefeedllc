import styles from './Header.module.css';
import Image from 'next/image';

export default function Header() {
    return (
        <div className={styles.mainText}>
            <span className={styles.redText}>SwipeFeed</span>
            <span className={styles.blackText}> available on the App Store now.</span>
            <br/>
            <a 
                href="https://apps.apple.com/us/app/swipefeed/id6739143466" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.appStoreLink}
            >
                <Image
                    src="/images/App Store Badge.png"
                    alt="Download on the App Store"
                    width={240}
                    height={80}
                    priority
                />
            </a>
        </div>
    );
}