import { createContext, useState } from "react";

export const themContext = createContext()

function Themcontext({children}) {
    const [mode, setmode] = useState("dark");

    const toggel = () => {
        setmode(prev => (prev === "dark" ? "light" : "dark"))
    }

    return(
        <themContext.Provider value={{toggel, mode}}>
            <div className={`theme ${mode}`}>
                {children}
            </div>
        </themContext.Provider>

    );
}

export default Themcontext;