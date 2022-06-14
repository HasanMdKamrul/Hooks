import { useCallback, useState } from 'react';
import Button from './Components/ButtonMemo';
import Counter from './Components/Countermemo';
import Title from './Components/Title';

function App() {

  const [count1,setCount1] = useState(0);
  const [count2,setCount2] = useState(0);

  const increamentByOne = useCallback(()=>(
    setCount1((prevCount)=>(prevCount+1))
  ),[]);

  const increamentByFive = useCallback(()=>(
    setCount2((prevCount)=>(prevCount+5))
  ),[]);
  
  return (
    <div>
      <Title /> 
      <Counter count={count1} title="Counter 1" />
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
