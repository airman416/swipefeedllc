import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import ImageCarousel from '@components/ImageCarousel'
import MainContent from '@components/MainContent'
import styles from './Home.module.css'

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>SwipeFeed LLC</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />
            
            <main className={styles.mainContent}>
                <MainContent />
            </main>

            <div className={styles.carouselContainer}>
                <ImageCarousel />
            </div>

            <Footer />
        </div>
    )
}
