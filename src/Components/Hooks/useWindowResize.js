import { useCallback, useEffect, useState } from 'react';

export default function useWindowResize (screenSize) {

    const [onSmallScreen, setOnSmallScreen] = useState(false);

    const screenSizeCheck = useCallback(()=>{
        setOnSmallScreen(window.innerWidth > screenSize);
    },[screenSize])

    useEffect(()=>{
        screenSizeCheck();

        window.addEventListener('resize',screenSizeCheck);

        return ()=>{
            window.removeEventListener('resize',screenSizeCheck);
        };

    },[screenSizeCheck])

    return onSmallScreen;
}