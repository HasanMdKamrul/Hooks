import { useEffect, useRef, useState } from 'react';

export default function Time(){

    const [date,setDate] = useState(new Date());

    const dateUpdated = ()=>(setDate(new Date()));

    const refferance = useRef();

    useEffect(()=>{
        refferance.current = setInterval(()=>{
            return(dateUpdated());
        },1000)

        return ()=>{
            clearInterval(refferance.current);
        };
    },[])

    return(
        <div>
            <p>
                Time : {date.toLocaleTimeString()}
            </p>
            <button type="button" onClick={()=>( clearInterval(refferance.current))}>
                Clean Up
            </button>
        </div>
    )
}