import { useCallback, useMemo, useState } from 'react';
import Button from './Components/ButtonMemo';
import Counter from './Components/Countermemo';
import Title from './Components/Title';

function App() {

  const [count1,setCount1] = useState(0);
  const [count2,setCount2] = useState(0);
  
  // ** useCallback(fun,[dep]) cached the whole function and if the dependecies changed than it forgents the cached value
  const increamentByOne = useCallback(()=>(
    setCount1((prevCount)=>(prevCount+1))
  ),[]);

  const increamentByFive = useCallback(()=>(
    setCount2((prevCount)=>(prevCount+5))
  ),[]);

   // ** When a huge function redered every change of state than we need to optimise using useMemo() hook

  const oddOrEven = useMemo(()=>{
   
    let i = 0;
    while (i < 1000000000) {
      i += 1;
    }
    return count1%2 === 0;
 },[count1]) ;
  
  return (
    <div>
      <Title /> 
      <Counter count={count1} title="Counter 1" />
      <span>
        {oddOrEven ? 'even':'Odd'}
      </span>
      <br />
      <Button change={increamentByOne}>
        Increment By one
      </Button>
      <hr />
      <Counter count={count2} title="Counter 2" />
      <br />
      <Button change={increamentByFive}>
        Increment By Five
      </Button>
    </div>
  );
}

export default App;
