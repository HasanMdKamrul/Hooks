import { useEffect, useState } from 'react';


export default function MyComponent (){

    const [count,setCount] = useState(0);
    const [date,setDate] = useState(new Date());

    const dateUpdated = ()=>(setDate(new Date()));

    const buttonClick = () =>{
        setCount((prevCount)=>(prevCount+1));
    }

    useEffect(()=>{
        console.log('Re-render every time')
        document.title = `click ${count} times`;
    },[count]);

    useEffect(()=>{
        console.log("First Call")
        const Interval = setInterval(() => {
            dateUpdated()
        }, 1000);

        return ()=>{
            clearInterval(Interval);
        }
    },[]);

    return (
        <div>   
                
                <p>
                    {count}
                </p>
                <button type="button" onClick={buttonClick}>
                    Click to change title
                </button>
                <p>
                   Current Time :  {date.toLocaleTimeString()}
                </p>
            </div>
    )
}