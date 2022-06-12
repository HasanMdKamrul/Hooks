
export default function Todo({count,change}) {
    // ** Alaways use use state at the top of the function 
    // ** Never use this useState() state function in the other function of your own function or class
    // ** useState() takes 2 params as a function and return an array of 2 elements [defaultValue,setValue()]


    console.log(count);
    console.log(change)

    // const [todo, setTodo] = useState({
    //     title: '',
    //     description: '',
    // });
  
    // const {title, description} = todo;

    // const titleChange = (e) =>{
    //     setTodo({
    //         ...todo,
    //         title: e.target.value,
    //     })
    // }


    // const descriptionChange = (e) =>{
    //     setTodo({
    //         ...todo,
    //         description: e.target.value,
    //     })
    // }

    return (
        <div>
            {/* <p>
                {title}
                {description}
                {count}
            </p>
            <p>
                <textarea type="text" value={title} onChange={titleChange} />

                <textarea type="text" value={description} onChange={descriptionChange} />                
            </p>
             */}
            <p>
                {count}
            </p>
            <p>
                <button type="button" onClick={change}>
                    Add 1
                </button>
            </p>
        </div>
    )

}
