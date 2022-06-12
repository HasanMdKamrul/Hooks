import { useState } from 'react';

export default function Todo() {
    const [todo, setTodo] = useState('');
    const [warning, setWarning] = useState(null);

    const handleTodoChange = (e)=>{
        const inputTodo = e.target.value;
        const warningTodo = inputTodo.includes('.js')?"Warning: Learn js":null;
        
        setTodo(e.target.value);
        setWarning(warningTodo);
    };

    return (
        <div>
            <p>{todo}</p>
            <p>
               <textarea type="text" value={todo} onChange={handleTodoChange} placeholder="Enter Todo" />
            </p>
            <hr />
            <h2>
                {warning === null?'Good Choice':'Warning: JS LEarn'}
            </h2>
        </div>
    )

}
