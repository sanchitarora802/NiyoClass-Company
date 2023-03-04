import React from "react";


function PreviousButton({fetchdata}){
    return(
        <>
            <button className="Previous" disabled={ localStorage.getItem('Questiontracker') <=0 } onClick={() => {
                let getLocalTracker = localStorage.getItem('Questiontracker')
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