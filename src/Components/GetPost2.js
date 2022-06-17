import { useEffect, useReducer } from 'react';

const initialState = {
    loading: true,
    post : {},
    error: ''
}

const reducer = (initialState,action) =>{

    switch (action.type) {
        case 'Success':
            return {
                loading: false,
                post : action.result,
                error: ''
            }
        case 'Error':
            return {
                loading: false,
                post : {},
                error: 'There was a something wrong!'
            }
    
        default:
            return initialState;
    }

}

export default function GetPost2(){

    const [state,dispatch] = useReducer(reducer,initialState);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => response.json())
            .then(data => {
                dispatch({
                    type: 'Success',
                    result: data,
                }) 
            })
            .catch(()=>{
                dispatch({
                    type: 'Error',
                })
            });
    },[])

    return(
        <div>
            {state.loading? 'Loading...': state.post.title}
            {state.error || null}

        </div>
    )
}