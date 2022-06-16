import { useReducer } from 'react';

const initialState = 0;

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

function CounetrReduce(){

    const[count,dispatch] = useReducer(reducer,initialState);

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
        </div>
    )
}

export default CounetrReduce;