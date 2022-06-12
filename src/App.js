import { useState } from 'react';
import CounterContext from './Components/Contexts/CounterContexts';
import Section from './Components/Section';

function App() {
  const [count,setCount] = useState(0);

  const change = ()=>(
    setCount((prevState)=>(prevState+1))
  )
  
  console.log(change)

  return (
    <div>
      <CounterContext.Provider value={{count:count,change:change}} >
        <Section  />
      </CounterContext.Provider>
    </div>
  );
}

export default App;
