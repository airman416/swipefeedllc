import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import styles from './Legal.module.css'

export default function Terms() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Terms & Conditions - SwipeFeed LLC</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />
            <main className={styles.mainContent}>
                <div style={{ maxWidth: '800px', padding: '20px' }}>
                    <h1>Terms & Conditions for SwipeFeed LLC</h1>
                    <p><strong>Effective Date:</strong> June 7, 2025</p>

                    <p>Welcome to SwipeFeed. These Terms & Conditions ("Terms") govern your access and use of the SwipeFeed mobile application ("App") and related services provided by SwipeFeed LLC ("we," "us," or "our"). Please read these Terms carefully before using our App.</p>

                    <h2>1. Acceptance of Terms</h2>
                    <p>By accessing, downloading, installing, or using the SwipeFeed App, you signify that you have read, understood, and agree to be bound by these Terms and our Privacy Policy, which is incorporated herein by reference. IF YOU DO NOT AGREE TO THESE TERMS, DO NOT ACCESS OR USE THE APP.</p>

                    <h2>2. Eligibility</h2>
                    <p>You must be at least 13 years of age to use the SwipeFeed App. If you are between 13 and 18 years of age (or the age of majority in your jurisdiction), you may only use the App with the consent and under the supervision of a parent or legal guardian who agrees to be bound by these Terms.</p>
                    
                    <p>By using the App, you represent and warrant that:</p>
                    <ul>
                        <li>You have the legal capacity to enter into these Terms</li>
                        <li>Your use of the App complies with all applicable laws and regulations</li>
                        <li>All information you provide is accurate and current</li>
                    </ul>

                    <h2>3. Description of Service</h2>
                    <p>SwipeFeed is a personalized news aggregation service that allows users to:</p>
                    <ul>
                        <li>Browse curated news content through an intuitive swipe interface</li>
                        <li>Personalize their news feed based on preferences and interactions</li>
                        <li>Save articles for later reading</li>
                        <li>Access different subscription tiers with varying features and article limits</li>
                        <li>Receive push notifications about relevant news (if enabled)</li>
                    </ul>
                    <p>The App aggregates news content from various third-party sources and presents it in a user-friendly format designed for mobile consumption.</p>

                    <h2>4. User Accounts and Registration</h2>
                    <h3>Account Creation</h3>
                    <p>To access the full features of SwipeFeed, you must create an account by providing:</p>
                    <ul>
                        <li>A valid email address</li>
                        <li>Any additional information requested during the registration process</li>
                    </ul>

                    <h3>Account Security</h3>
                    <p>You are responsible for:</p>
                    <ul>
                        <li>Maintaining the confidentiality of your account credentials</li>
                        <li>All activities that occur under your account</li>
                        <li>Immediately notifying us of any unauthorized use of your account or security breaches</li>
                        <li>Keeping your account information accurate and up-to-date</li>
                    </ul>

                    <h3>Account Restrictions</h3>
                    <p>You agree NOT to:</p>
                    <ul>
                        <li>Create multiple accounts for yourself</li>
                        <li>Share your account with others</li>
                        <li>Use another person's account without permission</li>
                        <li>Create an account using false or misleading information</li>
                        <li>Use automated means to create accounts</li>
                    </ul>

                    <h2>5. Subscription Services and Billing</h2>
                    <h3>Subscription Tiers</h3>
                    <p>SwipeFeed offers multiple subscription levels:</p>
                    <ul>
                        <li><strong>Free Tier</strong>: Limited daily article access with basic features</li>
                        <li><strong>Plus Tier</strong>: Increased daily article limit with enhanced features</li>
                        <li><strong>Pro Tier</strong>: Unlimited article access with premium features</li>
                    </ul>

                    <h3>Billing and Payment</h3>
                    <ul>
                        <li>Subscriptions are billed on a recurring basis (monthly or annually) as selected</li>
                        <li>Payment is processed through your device's app store (Apple App Store or Google Play Store)</li>
                        <li>Subscription fees are non-refundable except as required by applicable law</li>
                        <li>Prices may change with 7 days' advance notice</li>
                    </ul>

                    <h3>Auto-Renewal</h3>
                    <ul>
                        <li>Subscriptions automatically renew unless cancelled at least 24 hours before the current period ends</li>
                        <li>You can manage or cancel subscriptions through your device's app store settings</li>
                        <li>Cancellation takes effect at the end of the current billing period</li>
                    </ul>

                    <h3>Free Trials</h3>
                    <ul>
                        <li>We may offer free trial periods for paid subscriptions</li>
                        <li>You may be charged when the trial period expires unless you cancel before the trial ends</li>
                        <li>We reserve the right to limit trial eligibility</li>
                    </ul>

                    <h2>6. User Conduct and Prohibited Activities</h2>
                    <p>You agree to use the App responsibly and NOT to:</p>

                    <h3>General Prohibitions</h3>
                    <ul>
                        <li>Violate any applicable laws, regulations, or these Terms</li>
                        <li>Use the App for any unlawful, harmful, or fraudulent purpose</li>
                        <li>Interfere with or disrupt the App's operation or servers</li>
                        <li>Attempt to gain unauthorized access to any part of the App or our systems</li>
                        <li>Use automated scripts, bots, or other automated means to access the App</li>
                    </ul>

                    <h3>Content-Related Prohibitions</h3>
                    <ul>
                        <li>Submit false, misleading, or inappropriate content</li>
                        <li>Impersonate any person or entity</li>
                        <li>Violate any third party's intellectual property rights</li>
                        <li>Transmit spam, viruses, malware, or any malicious code</li>
                        <li>Engage in harassment, abuse, or threatening behavior</li>
                    </ul>

                    <h3>Commercial Restrictions</h3>
                    <ul>
                        <li>Use the App for commercial purposes without our written consent</li>
                        <li>Resell, redistribute, or sublicense access to the App</li>
                        <li>Extract, scrape, or harvest content from the App for commercial use</li>
                    </ul>

                    <h2>7. Content and Intellectual Property</h2>
                    <h3>Our Content</h3>
                    <p>The App and all its content, features, and functionality, including but not limited to text, graphics, logos, images, software, and design, are owned by SwipeFeed LLC or our licensors and are protected by copyright, trademark, and other intellectual property laws.</p>

                    <h3>Third-Party News Content</h3>
                    <ul>
                        <li>News articles and related content are sourced from third-party providers</li>
                        <li>We do not create, endorse, or guarantee the accuracy of third-party content</li>
                        <li>Third-party content is subject to the intellectual property rights of its respective owners</li>
                        <li>Your use of third-party content is at your own risk</li>
                    </ul>

                    <h3>User-Generated Content</h3>
                    <p>Any content you submit to the App (such as feedback, comments, or support requests):</p>
                    <ul>
                        <li>Must comply with these Terms and applicable laws</li>
                        <li>Grants us a non-exclusive, royalty-free, worldwide license to use for App improvement and support purposes</li>
                        <li>Should not contain personal information of others without their consent</li>
                    </ul>

                    <h3>Trademark and Copyright</h3>
                    <ul>
                        <li>SwipeFeed, the SwipeFeed logo, and related marks are trademarks of SwipeFeed LLC</li>
                        <li>You may not use our trademarks without our prior written consent</li>
                        <li>If you believe your intellectual property rights have been violated, please contact us immediately</li>
                    </ul>

                    <h2>8. Privacy and Data Protection</h2>
                    <p>Your privacy is important to us. Our collection, use, and protection of your personal information is governed by our Privacy Policy, which is incorporated into these Terms by reference. By using the App, you consent to our data practices as described in the Privacy Policy.</p>

                    <h2>9. Third-Party Services and Links</h2>
                    <p>The App may contain links to third-party websites, services, or content. We do not control and are not responsible for:</p>
                    <ul>
                        <li>The availability, accuracy, or content of third-party services</li>
                        <li>Third-party privacy practices or terms of service</li>
                        <li>Any damages or losses caused by third-party services</li>
                    </ul>
                    <p>Your interactions with third-party services are solely between you and the third party.</p>

                    <h2>10. App Modifications and Availability</h2>
                    <h3>Service Changes</h3>
                    <p>We reserve the right to:</p>
                    <ul>
                        <li>Modify, suspend, or discontinue any part of the App at any time</li>
                        <li>Update the App to improve functionality, security, or user experience</li>
                        <li>Change subscription features, pricing, or availability with appropriate notice</li>
                    </ul>

                    <h3>App Availability</h3>
                    <ul>
                        <li>We strive to maintain App availability but do not guarantee uninterrupted service</li>
                        <li>The App may be unavailable due to maintenance, updates, or technical issues</li>
                        <li>We are not liable for any downtime or service interruptions</li>
                    </ul>

                    <h2>11. Termination</h2>
                    <h3>Termination by You</h3>
                    <p>You may terminate your account at any time by:</p>
                    <ul>
                        <li>Using the account deletion feature in the App</li>
                        <li>Contacting our customer support</li>
                        <li>Cancelling your subscription through your device's app store</li>
                    </ul>

                    <h3>Termination by Us</h3>
                    <p>We may terminate or suspend your account immediately, without prior notice, if you:</p>
                    <ul>
                        <li>Violate these Terms or our Privacy Policy</li>
                        <li>Engage in fraudulent or illegal activities</li>
                        <li>Use the App in a manner that harms our services or other users</li>
                    </ul>

                    <h3>Effect of Termination</h3>
                    <p>Upon termination:</p>
                    <ul>
                        <li>Your access to the App will cease immediately</li>
                        <li>Your account data may be deleted in accordance with our Privacy Policy</li>
                        <li>Subscription fees are non-refundable except as required by law</li>
                        <li>Provisions of these Terms that should survive termination will remain in effect</li>
                    </ul>

                    <h2>12. Disclaimers and Warranties</h2>
                    <h3>Service Disclaimer</h3>
                    <p><strong>THE APP AND ALL CONTENT ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO:</strong></p>
                    <ul>
                        <li>MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT</li>
                        <li>ACCURACY, RELIABILITY, OR COMPLETENESS OF CONTENT</li>
                        <li>UNINTERRUPTED OR ERROR-FREE OPERATION</li>
                        <li>SECURITY OR FREEDOM FROM VIRUSES OR HARMFUL COMPONENTS</li>
                    </ul>

                    <h3>News Content Disclaimer</h3>
                    <ul>
                        <li>We do not verify the accuracy of third-party news content</li>
                        <li>News content reflects the views of its original publishers, not SwipeFeed</li>
                        <li>We are not responsible for any decisions made based on news content</li>
                        <li>Users should verify important information from original sources</li>
                    </ul>

                    <h2>13. Limitation of Liability</h2>
                    <p><strong>TO THE MAXIMUM EXTENT PERMITTED BY LAW, SWIPEFEED LLC SHALL NOT BE LIABLE FOR:</strong></p>

                    <h3>Excluded Damages</h3>
                    <ul>
                        <li>INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES</li>
                        <li>LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES</li>
                        <li>DAMAGES RESULTING FROM YOUR USE OR INABILITY TO USE THE APP</li>
                        <li>DAMAGES RESULTING FROM THIRD-PARTY CONTENT OR SERVICES</li>
                    </ul>

                    <h3>Liability Cap</h3>
                    <p>Our total liability for any claims related to the App shall not exceed the amount you paid us in the three (3) months preceding the claim, or fifty dollars ($50), whichever is greater.</p>

                    <h2>14. Indemnification</h2>
                    <p>You agree to indemnify, defend, and hold harmless SwipeFeed LLC, its officers, directors, employees, agents, and affiliates from and against any claims, liabilities, damages, losses, costs, or expenses arising from:</p>
                    <ul>
                        <li>Your use or misuse of the App</li>
                        <li>Your violation of these Terms</li>
                        <li>Your violation of any third party's rights</li>
                        <li>Any content you submit to the App</li>
                    </ul>

                    <h2>15. Dispute Resolution and Arbitration</h2>
                    <h3>Binding Arbitration</h3>
                    <p>Any disputes arising from these Terms or your use of the App shall be resolved through binding arbitration rather than in court, except for:</p>
                    <ul>
                        <li>Claims in small claims court</li>
                        <li>Intellectual property disputes</li>
                        <li>Requests for injunctive relief</li>
                    </ul>

                    <h3>Arbitration Process</h3>
                    <ul>
                        <li>Arbitration will be conducted by a reputable arbitration organization</li>
                        <li>The arbitration will take place in Boston, Massachusetts, or remotely</li>
                        <li>Each party will bear their own costs except as otherwise required by law</li>
                        <li>The arbitrator's decision will be final and binding</li>
                    </ul>

                    <h3>Class Action Waiver</h3>
                    <p><strong>YOU AGREE THAT DISPUTES WILL BE RESOLVED ON AN INDIVIDUAL BASIS ONLY. YOU WAIVE ANY RIGHT TO PARTICIPATE IN CLASS ACTION LAWSUITS OR CLASS-WIDE ARBITRATIONS.</strong></p>

                    <h2>16. Governing Law</h2>
                    <p>These Terms shall be governed by and construed in accordance with the laws of the Commonwealth of Massachusetts and the United States, without regard to conflict of law principles. Any legal action not subject to arbitration shall be brought exclusively in the state or federal courts located in Boston, Massachusetts.</p>

                    <h2>17. Changes to Terms</h2>
                    <p>We may modify these Terms at any time by:</p>
                    <ul>
                        <li>Posting updated Terms in the App</li>
                        <li>Providing notice through the App or via email</li>
                        <li>Updating the "Effective Date" above</li>
                    </ul>
                    <p>Material changes will be effective thirty (30) days after notice. Your continued use of the App after changes take effect constitutes acceptance of the new Terms.</p>

                    <h2>18. Electronic Communications</h2>
                    <p>By using the App, you consent to receive electronic communications from us, including:</p>
                    <ul>
                        <li>Service announcements and updates</li>
                        <li>Legal notices and policy changes</li>
                        <li>Marketing communications (which you may opt out of)</li>
                    </ul>
                    <p>Electronic communications satisfy any legal requirement for written notice.</p>

                    <h2>19. Severability</h2>
                    <p>If any provision of these Terms is found to be unenforceable or invalid, the remaining provisions will continue in full force and effect. The unenforceable provision will be modified to the minimum extent necessary to make it enforceable while preserving its original intent.</p>

                    <h2>20. Entire Agreement</h2>
                    <p>These Terms, together with our Privacy Policy, constitute the entire agreement between you and SwipeFeed LLC regarding the App and supersede all prior agreements, understandings, and communications.</p>

                    <h2>21. Assignment</h2>
                    <p>You may not assign or transfer these Terms or your account without our written consent. We may assign our rights and obligations under these Terms without restriction.</p>

                    <h2>16. Contact Us</h2>
                    <p>If you have any questions about these Terms, please contact us at:</p>
                    <address>
                        <strong>SwipeFeed LLC</strong><br />
                        Email: <a href="mailto:swipefeedlive@gmail.com">swipefeedlive@gmail.com</a><br />
                        Address: 7 Speare Pl, Boston, MA, 02115, United States
                    </address>
                </div>
            </main>
            <Footer />
        </div>
    )
} 