import { useReducer } from 'react';
import ComponentA from './Components/ComponentA';
import MyCounterContext from './Components/Contexts/MyCounterContext';


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

function App() {
  const[count,dispatch] = useReducer(reducer,initialState);

  return (
    
    <div>
      <p>
        Count - {count}
      </p>
      <MyCounterContext.Provider value={{counterDispatch: dispatch}}>
        <ComponentA />
      </MyCounterContext.Provider>
      
    </div>
  )
}

export default App;
