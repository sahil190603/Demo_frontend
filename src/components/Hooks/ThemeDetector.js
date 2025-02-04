import { useEffect, useState } from "react";

const useThemeDetector = () => {
    const getCurrentTheme = () => window.matchMedia("(prefers-color-scheme: dark)").matches;
    const [isDarkTheme, setIsDarkTheme] = useState(getCurrentTheme());  
    
    useEffect(() => {
        const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
        
        const mqListener = (e) => setIsDarkTheme(e.matches);
        
        darkThemeMq.addEventListener("change", mqListener);
        
        return () => darkThemeMq.removeEventListener("change", mqListener);
    }, []);
    
    return isDarkTheme ? "dark" : "light";
}

export default useThemeDetector;
