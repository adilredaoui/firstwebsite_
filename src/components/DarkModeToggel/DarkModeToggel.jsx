import { themContext } from '@/context/themcontext';
import style from './DarkModeToggel.module.css'
import { useContext } from 'react';


function DarkModeToggel() {
    const {toggel, mode} = useContext(themContext)
    return(
        <div className={style.container} onClick={toggel}>
            <div className={style.icon}>🌙</div>
            <div className={style.icon}>🌚</div>
            <div className={style.switsher}
            style={mode === "light" ? {left:'2px'} : {right:'2px'}}
            />            
        </div>
    );
}

export default DarkModeToggel;