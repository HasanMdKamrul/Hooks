import { useContext } from "react";
import MyCounterContext from "./Contexts/MyCounterContext";

function ComponentB(){

    const myContext = useContext(MyCounterContext)

    return(
        <div>
            <button type="button" onClick={()=>(myContext.counterDispatch('increment'))}>
                Increment by 1
            </button>
            <br />
            <hr />
            <button type="button" onClick={()=>(myContext.counterDispatch('decrement'))}>
                Decrement by 1
            </button>
        </div>
    )
}

export default ComponentB;