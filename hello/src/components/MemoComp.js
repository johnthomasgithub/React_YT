import React from 'react'

function MemoComp({name}) {
    console.log("Renderiing Parent Component");
    return (
        <div>
            {name}
        </div>
    )
}

export default React.memo(MemoComp); 
