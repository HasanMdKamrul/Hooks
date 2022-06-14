import React from 'react';

function Button ({change,children}){

    console.log(`Button re-render ${children}`);
    return(
        <div>
            <button type="button" onClick={change}>
                {children}
            </button>
        </div>
    )
}

export default React.memo(Button) ;