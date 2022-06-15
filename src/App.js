import { useEffect, useRef } from 'react';

function App() {

  const Inputref = useRef();

  useEffect(()=>{
    Inputref.current.focus();
  },[])


  return (
    <div>
     <p>
      <input ref={Inputref} type="text" placeholder="Enter Something" />
     </p>
    </div>
  );
}

export default App;
