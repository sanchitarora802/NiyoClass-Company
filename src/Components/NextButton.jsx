import React from "react";


function NextButton({fetchdata}){
    return(
        <>
            <button disabled={ localStorage.getItem('Questiontracker') >=2 } onClick={() => {
                let getLocalTracker = localStorage.getItem('Questiontracker')
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