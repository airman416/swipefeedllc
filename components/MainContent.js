import styles from './MainContent.module.css';
import Image from 'next/image';

export default function MainContent() {
    return (
        <div className={styles.mainContent}>
            <div className={styles.text}>
                Available on the App Store now.
            </div>
            <a 
                href="https://apps.apple.com/us/app/swipefeed/id6739143466" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.appStoreLink}
            >
                <Image
                    src="/images/App Store Badge.png"
                    alt="Download on the App Store"
                    width={200}
                    height={66}
                    priority
                />
            </a>
        </div>
    );
} 