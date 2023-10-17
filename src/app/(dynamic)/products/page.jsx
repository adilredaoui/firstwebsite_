import styles from "./page.module.css"
import Link from "next/link";
import Image from "next/image";


async function getData() {
    const res = await fetch('https://dummyjson.com/products')
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }

async function blog() {

    const data = await getData();
    const products = data.products;

    console.log()
    
    return (
        <div className={styles.mainContainer}>
            {
            products.map((product)=>(
            <Link href={`/products/${product.id}`} className={styles.post} key={product.id}>
            <div className={styles.imageContainer}>
                <Image
                    className={styles.image}
                    src={product.thumbnail}
                    fill={true}
                    alt="Picture of the author"
                />
            </div>
            <div className={styles.contente}>
                <h1 className={styles.title}>{product.title}</h1>
                <p className={styles.text}>{product.description}</p>
            </div>
        </Link>))
            }
            
        </div>
    );
}

export default blog;