import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import styles from './Home.module.css'

export default function Privacy() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Privacy Policy - SwipeFeed LLC</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.mainContent}>
                <div style={{ maxWidth: '800px', padding: '20px' }}>
                    <h1>Privacy Policy for SwipeFeed LLC</h1>
                    <p><strong>Effective Date:</strong> December 6, 2024</p>

                    <p>SwipeFeed LLC ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application SwipeFeed (the "App").</p>

                    <h2>Information We Collect</h2>
                    <h3>Personal Information</h3>
                    <p>We collect the following personal information when you use our App:</p>
                    <ul>
                        <li>Email address (used for sign-in purposes)</li>
                        <li>News preferences (based on your likes and dislikes)</li>
                    </ul>

                    <h3>Usage Data</h3>
                    <p>We automatically collect certain information about your device and how you interact with our App, including:</p>
                    <ul>
                        <li>Device information (e.g., device type, operating system)</li>
                        <li>App usage statistics</li>
                        <li>Interaction data (e.g., news cards you've swiped left or right on)</li>
                    </ul>

                    <h2>How We Use Your Information</h2>
                    <p>We use the collected information for the following purposes:</p>
                    <ul>
                        <li>To provide and maintain our App</li>
                        <li>To personalize your news feed based on your preferences</li>
                        <li>To improve our App and user experience</li>
                        <li>To communicate with you about App updates or changes</li>
                    </ul>

                    <h2>Data Storage and Security</h2>
                    <p>We implement appropriate technical and organizational measures to protect your personal information. Your data is stored securely and only accessible to authorized personnel.</p>

                    <h2>Third-Party Services</h2>
                    <p>We use third-party news APIs to gather and display news content in our App. These services may collect and process certain information when you interact with the content they provide.</p>

                    <h2>Your Rights</h2>
                    <p>You have the right to:</p>
                    <ul>
                        <li>Access the personal information we hold about you</li>
                        <li>Request correction of your personal information</li>
                        <li>Request deletion of your account and associated data</li>
                        <li>Opt-out of certain data collection or use</li>
                    </ul>
                    <p>To exercise these rights, please contact us using the information provided in the "Contact Us" section below.</p>

                    <h2>Changes to This Privacy Policy</h2>
                    <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Effective Date" at the top.</p>

                    <h2>Contact Us</h2>
                    <p>If you have any questions or concerns about this Privacy Policy, please contact us at:</p>
                    <address>
                        SwipeFeed LLC<br/>
                            Email: <a href="mailto:support@swipefeed.live">swipefeedlive@gmail.com</a><br/>
                                Address: 7 Speare Pl, Boston, MA, 02115, United States
                    </address>

                            <p>By using the SwipeFeed App, you agree to the collection and use of information in accordance with this Privacy Policy.</p>
                        </div>
                    </main>

                    <Footer />
        </div>
    )
} 