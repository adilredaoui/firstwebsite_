import Styles from './Footer.module.css'
import Image from 'next/image'
import {icon} from './data'


function Footer() {
    return(
      <div className={Styles.container}>
        <div>© 2023 - 2023 adil - All Rights Reserved.</div>
        <div className={Styles.social}>
          {
            icon.map(link => (
            <Image
              key={link.id}
              src={link.src}
              width={link.width}
              height={link.height}
              className={Styles.icons}
              alt={link.alt}
            />))
          }
        </div>
      </div>
    );
}

export default Footer;