import React from "react";


function NextButton({fetchdata}){
    return(
        <>
            <button disabled={ localStorage.getItem('tracker') >=2 } onClick={() => {
                let getLocalTracker = localStorage.getItem('tracker')
                if(getLocalTracker <= 2 )
                {
                getLocalTracker= Number(getLocalTracker)+ 1;
                fetchdata(getLocalTracker)
                }
            }}>Next</button>
        </>
    )
}

export default NextButton