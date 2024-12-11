import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import styles from './Home.module.css'

export default function Terms() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Terms & Conditions - SwipeFeed LLC</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.mainContent}>
                <div style={{ maxWidth: '800px', padding: '20px' }}>
                    <h1>Terms & Conditions for SwipeFeed LLC</h1>
                    <p><strong>Effective Date:</strong> December 6, 2024</p>

                    <p>Welcome to SwipeFeed. By using our mobile application ("App"), you agree to these Terms & Conditions. Please read them carefully.</p>

                    <h2>1. Acceptance of Terms</h2>
                    <p>By accessing or using the SwipeFeed App, you agree to be bound by these Terms & Conditions. If you do not agree to these terms, please do not use our App.</p>

                    <h2>2. Description of Service</h2>
                    <p>SwipeFeed is a news aggregation app that allows users to swipe left or right on news cards to indicate their preferences. The App requires users to sign in and stores their email and liked news cards.</p>

                    <h2>3. User Accounts</h2>
                    <p>To use SwipeFeed, you must create an account. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.</p>

                    <h2>4. User Conduct</h2>
                    <p>You agree not to:</p>
                    <ul>
                        <li>Use the App for any unlawful purpose or in violation of these Terms</li>
                        <li>Attempt to gain unauthorized access to any part of the App</li>
                        <li>Interfere with or disrupt the operation of the App</li>
                        <li>Use the App to transmit any viruses, malware, or other malicious code</li>
                    </ul>

                    <h2>5. Intellectual Property</h2>
                    <p>The App and its original content, features, and functionality are owned by SwipeFeed LLC and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.</p>

                    <h2>6. Third-Party Content</h2>
                    <p>The news content displayed in the App is sourced from third-party APIs. We do not endorse, guarantee, or assume responsibility for any third-party content. Your interaction with such content is at your own risk.</p>

                    <h2>7. Privacy Policy</h2>
                    <p>Your use of the App is also governed by our Privacy Policy, which is incorporated into these Terms & Conditions by reference.</p>

                    <h2>8. Modifications to the App</h2>
                    <p>We reserve the right to modify or discontinue, temporarily or permanently, the App or any features or portions thereof without prior notice.</p>

                    <h2>9. Termination</h2>
                    <p>We may terminate or suspend your account and access to the App immediately, without prior notice or liability, for any reason, including if you breach these Terms & Conditions.</p>

                    <h2>10. Limitation of Liability</h2>
                    <p>In no event shall SwipeFeed LLC, its directors, employees, partners, agents, suppliers, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the App.</p>

                    <h2>11. Governing Law</h2>
                    <p>These Terms shall be governed by and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.</p>

                    <h2>12. Changes to Terms</h2>
                    <p>We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect.</p>

                    <h2>13. Contact Us</h2>
                    <p>If you have any questions about these Terms, please contact us at:</p>
                    <address>
                        SwipeFeed LLC<br />
                        Email: <a href="mailto:support@swipefeed.live">swipefeedlive@gmail.com</a><br />
                        Address: 7 Speare Pl, Boston, MA, 02115, United States
                    </address>

                    <p>By using the SwipeFeed App, you agree to these Terms & Conditions.</p>

                </div>
            </main>

            <Footer />
        </div>
    )
} 