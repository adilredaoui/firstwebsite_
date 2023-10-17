import styles from "./page.module.css"
import Image from "next/image";

async function getData(id) {
    const res = await fetch(`https://dummyjson.com/products/${id}`)
   
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }

  async function post({params}) {
    const products = await getData(params.id)

    return(
        <header className={styles.header}>
            <div className={styles.info}>
                <h1 className={styles.title}>{products.title}</h1>
                <p className={styles.desc}>{products.description}</p>
            </div>
            <div className={styles.imageContainer}>
                <span className={styles.auther}>{products.category}</span>
                <Image
                    className={styles.image}
                    src={products.thumbnail}
                    alt={products.title}
                    fill= {true}
                />
            </div>
            <div className={styles.galory}>
            {products.images.map(image => (
                <Image
                key={products.id}
                className={styles.image_}
                src={image}
                width={150}
                height={150}
                alt={products.title}
            />
            ))
            
            }   

            </div>
            <div className={styles.content}>
                <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit earum minima vitae! Repellendus iure odio dolore nulla corrupti dolorem molestias, accusamus expedita iusto fugiat ad sit nesciunt perspiciatis enim pariatur!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit earum minima vitae! Repellendus iure odio dolore nulla corrupti dolorem molestias, accusamus expedita iusto fugiat ad sit nesciunt perspiciatis enim pariatur!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit earum minima vitae! Repellendus iure odio dolore nulla corrupti dolorem molestias, accusamus expedita iusto fugiat ad sit nesciunt perspiciatis enim pariatur!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit earum minima vitae! Repellendus iure odio dolore nulla corrupti dolorem molestias, accusamus expedita iusto fugiat ad sit nesciunt perspiciatis enim pariatur!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit earum minima vitae! Repellendus iure odio dolore nulla corrupti dolorem molestias, accusamus expedita iusto fugiat ad sit nesciunt perspiciatis enim pariatur!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit earum minima vitae! Repellendus iure odio dolore nulla corrupti dolorem molestias, accusamus expedita iusto fugiat ad sit nesciunt perspiciatis enim pariatur!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit earum minima vitae! Repellendus iure odio dolore nulla corrupti dolorem molestias, accusamus expedita iusto fugiat ad sit nesciunt perspiciatis enim pariatur!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit earum minima vitae! Repellendus iure odio dolore nulla corrupti dolorem molestias, accusamus expedita iusto fugiat ad sit nesciunt perspiciatis enim pariatur!
                </p>
                
            </div>
        </header> 
        );
}

export default post