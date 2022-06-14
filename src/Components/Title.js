import React from 'react';

function Title(){
    console.log('Rendering the counter title .....');
    return(
        <div>
            <h2>
                Title of Counters !
            </h2>
        </div>
    )
}

export default React.memo(Title);