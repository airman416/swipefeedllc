import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import styles from './Legal.module.css'

export default function DaytimePolicy() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Privacy Policy - DayTime</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />
            <main className={styles.mainContent}>
                <div style={{ maxWidth: '800px', padding: '20px' }}>
                    <h1>Privacy Policy for DayTime</h1>
                    <p><strong>Last updated:</strong> July 14, 2025</p>

                    <p>Your privacy matters. At DayTime, we believe your daily activities, reflections, and habits are your own. We are committed to being transparent about the data we collect, how it’s used, and your control over it.</p>

                    <hr />

                    <h2>1. Information We Collect</h2>
                    <p>Currently, we do not collect any personally identifiable information. All activity logs, timers, and notes you create are stored locally on your device only.</p>
                    <p>In the future, we may introduce features such as sign-in, cloud backups, and long-term goal tracking. When those features are launched, we will update this policy and request your explicit consent.</p>

                    <hr />

                    <h2>2. How Your Data Is Used</h2>
                    <p>Since we do not collect or store any data on our servers at this time, your information stays private and only accessible to you on your device. Any social media sharing is initiated by you, and we do not track or store what you choose to share.</p>

                    <hr />

                    <h2>3. Optional Analytics</h2>
                    <p>We may use privacy-friendly analytics (like Apple’s App Analytics or anonymized event tracking) to understand general app usage — such as how often users start a session or adjust the timer — to help improve the experience.</p>
                    <p>These analytics do not include your content, logs, or personal identity.</p>

                    <hr />

                    <h2>4. Third-Party Services</h2>
                    <p>Currently, DayTime does not use third-party services that collect user data.</p>
                    <p>If we integrate such services (e.g., for authentication or analytics), we will clearly inform you and update this policy.</p>

                    <hr />

                    <h2>5. Your Control</h2>
                    <p>You are in full control of your data:</p>
                    <ul>
                        <li>You can delete your entries at any time from within the app.</li>
                        <li>If cloud sync is introduced in the future, you will have full access to manage or delete your data from our servers.</li>
                    </ul>

                    <hr />

                    <h2>6. Children’s Privacy</h2>
                    <p>DayTime is not intended for children under the age of 13. We do not knowingly collect any data from children. If we learn that we have inadvertently collected personal information from a child, we will take immediate steps to delete it.</p>

                    <hr />

                    <h2>7. Changes to This Policy</h2>
                    <p>We may update this Privacy Policy as the app evolves. Any changes will be posted here, and if they are significant, we will notify you through the app.</p>

                    <hr />
                    
                    <h2>8. Contact Us</h2>
                    <p>If you have any questions or concerns about this Privacy Policy, feel free to reach out:</p>
                    <p>Email: <a href="mailto:swipefeedlive@gmail.com">swipefeedlive@gmail.com</a></p>
                </div>
            </main>
            <Footer />
        </div>
    )
} 