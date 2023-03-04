import React from "react";
import NextButton from "./NextButton";
import PreviousButton from "./Previous";


function Buttons({fetchdata}){
return(
    <div className="ButtonWrap">
    <PreviousButton fetchdata={fetchdata}/>
    <NextButton fetchdata={fetchdata}/>
    </div>
)
}

export default Buttons;