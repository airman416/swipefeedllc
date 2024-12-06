import styles from './Footer.module.css'
import Link from 'next/link'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div style={{ padding: '0px' }}>© SwipeFeed LLC 2024</div>
        <span className={styles.divider} style={{ padding: '0 5px' }}> | </span>
        <div className={styles.links}>
          <Link href="/terms" style={{ padding: '0px' }}>Terms & Conditions</Link>
          <span className={styles.divider} style={{ padding: '0 5px' }}> | </span>
          <Link href="/privacy" style={{ padding: '0px' }}>Privacy Policy</Link>
        </div>
      </footer>
    </>
    
  )
}
