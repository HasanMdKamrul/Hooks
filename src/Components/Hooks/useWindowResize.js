import { useEffect, useState } from 'react';

export default function useWindowResize (screenSize) {

    const [onSmallScreen, setOnSmallScreen] = useState(false);



    useEffect(()=>{

        const screenSizeCheck = ()=>{
            setOnSmallScreen(window.innerWidth > screenSize);
        }

        screenSizeCheck();

        window.addEventListener('resize',screenSizeCheck);

        return ()=>{
            window.removeEventListener('resize',screenSizeCheck);
        };

    },[screenSize])


    return onSmallScreen;
}