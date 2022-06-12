import { useState } from 'react';


export default function Counter(){

    const [count,setCount] = useState(0);

    const buttonChange = ()=>{

        setCount((prevState)=>{
            return prevState+1;
        })
    };

   

    const addFive = ()=>{
        
        for (let index = 0; index < 5; index++) {
           setCount((prevState)=>(prevState+1));
        }
    };

   


    return (
        <div>
            {count}

            <p>
                <button type="button" onClick={buttonChange}>
                    Add 1
                </button>
            </p>
            <p>
                <button type="button" onClick={addFive}>
                    Add 5
                </button>
            </p>
        </div>
    )
}