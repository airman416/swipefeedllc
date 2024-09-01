import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import ImageCarousel from '@components/ImageCarousel'
import styles from './Home.module.css'

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>SwipeFeed LLC</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.mainContent}>
                <div className={styles.leftContent}>
                    <Header title="SwipeFeed" />
                </div>
                <div className={styles.rightContent}>
                    <ImageCarousel />
                </div>
            </main>

            <Footer />
        </div>
    )
}
