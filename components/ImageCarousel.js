import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import styles from './ImageCarousel.module.css'

export default function ImageCarousel() {
    return (
        <div className={styles.carousel}>
            <Carousel
                showThumbs={false}
                infiniteLoop
                useKeyboardArrows
                autoPlay
                showArrows={false}  /* Disable the arrows */
            >
                <div>
                    <img src="/images/image1.png" alt="Image 1" className={styles.carouselImage} />
                </div>
                <div>
                    <img src="/images/image2.png" alt="Image 2" className={styles.carouselImage} />
                </div>
                <div>
                    <img src="/images/image3.png" alt="Image 3" className={styles.carouselImage} />
                </div>
            </Carousel>
        </div>
    )
}
