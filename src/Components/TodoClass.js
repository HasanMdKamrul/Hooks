import React from "react";


export default class TodoClass extends React.Component{

    state = {
        todo: '', 
        warning: null
    };

    handleTodoChange = (e)=>{
        const inputTodo = e.target.value;
        const warningTodo = inputTodo.includes('.js')?"Warning: Learn js":null;
        this.setState({
            todo: inputTodo,
            warning: warningTodo
        })
    };

    render() {
        const {todo,warning} = this.state;
        return (
            <div>
                <p>{todo}</p>
                <p>
                   <textarea type="text" value={todo} onChange={this.handleTodoChange} placeholder="Enter Todo" />
                </p>
                <hr />
                <h2>
                    {warning === null?'Good Choice':'Warning: JS LEarn'}
                </h2>
            </div>
        )
    }
}