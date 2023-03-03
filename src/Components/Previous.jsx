import React from "react";


function PreviousButton({fetchdata}){
    return(
        <>
            <button disabled={ localStorage.getItem('tracker') == 0 } onClick={() => {
                let getLocalTracker = localStorage.getItem('tracker')
                if(getLocalTracker >=0 )
                {
                getLocalTracker= Number(getLocalTracker)- 1;
                fetchdata(getLocalTracker)
                }
            }}>Previous</button>
        </>
    )
}

export default PreviousButton