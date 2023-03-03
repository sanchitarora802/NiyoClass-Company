import React from "react";

function DisplayQues({apiRes}){
       return(
        <>
        <h1>Display Ques component</h1>
        {
            apiRes.map((child) => {
                return <div>{child.Question}</div>
            })
        }
        </>
    )
}

export default DisplayQues