import { useReducer } from 'react';

const initialState = 0;
const initialState2 = 5;


const reducer = (currentState,action)=>{

    switch (action) {
        case 'increment':
            return currentState+1;
        case 'decrement':
            return currentState-1;    
    
        default:
            return currentState;
    }
}

function CounetrThreeEx(){

    const[count,dispatch] = useReducer(reducer,initialState);
    const[count2,dispatch1] = useReducer(reducer,initialState2);


    return(
        <div>
            <p>
                Count - {count}
            </p>
            <button type="button" onClick={()=>(dispatch('increment'))}>
                Increment by 1
            </button>
            <br />
            <br />
            <button type="button" onClick={()=>(dispatch('decrement'))}>
                Decrement by 1
            </button>
            <br />
            <br />
            <hr />
            <p>
                Count2 - {count2}
            </p>
            <button type="button" onClick={()=>(dispatch1('increment'))}>
                Increment by 1
            </button>
            <br />
            <br />
            <button type="button" onClick={()=>(dispatch1('decrement'))}>
                Decrement by 1
            </button>
        </div>
    )
}

export default CounetrThreeEx;