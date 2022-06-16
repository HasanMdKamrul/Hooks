import { useReducer } from 'react';

const initialState = {
    counter1 : 0,
    counter2 : 5
}

const reducer = (currentState,action)=>{

    switch (action.type) {
        
        case "increment1":
            return {...currentState, counter1 : currentState.counter1 + action.value};
        case 'decrement1':
            return {...currentState, counter1 : currentState.counter1 - action.value};    
        case 'increment5':
            return {...currentState, counter2 : currentState.counter2 + action.value};
        case 'decrement5':
            return {...currentState, counter2 : currentState.counter2 - action.value};
    
        default:
            return currentState;
    }
}

function CounetrReduce(){

    const[count,dispatch] = useReducer(reducer,initialState);

    return(
        <div>
            <p>
                Count1 - {count.counter1}

                <br />

                count2 - {count.counter2}
            </p>
            <button type="button" onClick={()=>(dispatch({
                type: "increment1",
                value: 1
            }))}>
                Increment by 1
            </button>
            <br />
            <br />
            <button type="button" onClick={()=>(dispatch({
                type: "decrement1",
                value: 1
            }))}>
                Decrement by 1
            </button>
            <br />
            <br />
            <button type="button" onClick={()=>{
                dispatch({
                    type: "increment5",
                    value: 5
                })
            }}>
                Increment by 5
            </button>
            <br />
            <br />
            <button type="button" onClick={()=>{
                dispatch({
                    type: "decrement5",
                    value: 5
                })
            }}>
                Decrement by 5
            </button>
        </div>
    )
}

export default CounetrReduce;