import Styles from './Button.module.css'

export default function button() {
    return(
        <button className={Styles.button} onClick={() => {console.log("Logout")}}>Logout</button>
    );
}