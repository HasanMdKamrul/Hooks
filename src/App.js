import { useEffect, useRef } from 'react';
import InputForworded from './Components/Input';

function App() {

  const Inputref = useRef();

  useEffect(()=>{
    Inputref.current.focus();
  },[])


  return (
    <div>
     <p>
      <InputForworded ref={Inputref} type="text" placeholder="Enter Something" />
     </p>
    </div>
  );
}

export default App;
