import React from 'react';

function Counter({count,title}) {

    console.log(`Rendering ${title} of ${count}`);
    return(
        <div>
            {title} is at {count}
        </div>
    )
    
}

export default React.memo(Counter);