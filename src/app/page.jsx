import styles from './page.module.css' 
import Image from 'next/image'
import hero from 'public/images/hero.svg'
export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.col}>
        <h1 className={styles.title}>your best online shop destination!</h1>
        <p className={styles.description}>Discover Your Ultimate Online Shopping Destination! Find the finest products and unbeatable deals at your fingertips. Shop with confidence and convenience.
        </p>
        <button className={styles.button}>Shop new on my store</button>
      </div>
      <div className={styles.col}>
        <Image className={styles.img} src={hero} alt='adil hero'/>
      </div>

    </div>
  )
}
