import Link from 'next/link'
import Styles from "./Navbar.module.css"
import {links} from "./data"
import Logo from '@/elements/Logo/Logo'
import Button from '@/elements/Button/button'
import DarkModeToggel from '../DarkModeToggel/DarkModeToggel'

function Navbar() {
    return(
        <div className={Styles.container}>

            <Logo/>

            <div className={Styles.links}>
                <DarkModeToggel/>
                {links.map(link => (<Link key={link.id} href={link.url} >{link.title}</Link>
                ))}
                <Button/>
            </div>
            
            

        </div>
        
    );
}

export default Navbar;