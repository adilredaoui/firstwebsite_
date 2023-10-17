import Link from 'next/link'
import Styles from './logo.module.css'

function logo() {
    return(
        <Link href="/" className={`${Styles.logo}`}>AdilShop</Link>
    );
}

export default logo;