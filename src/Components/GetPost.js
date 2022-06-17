import { useEffect, useState } from 'react';

export default function GetPost(){
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState('');
    const [post,setPost] = useState({});
    
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => response.json())
            .then(data => {
                setLoading(false);
                setError('');
                setPost(data);
            })
            .catch(() => {
                setLoading(false);
                setError('Something is Wrong');
                setPost('');
            })
    },[]);

    return(
        <div>
            {loading ? 'Loading.....':post.title}
            {error || null}
        </div>
    )
}