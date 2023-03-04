import { MathJax } from "better-react-mathjax";
import { v4 as uuidv4 } from 'uuid';
import React from "react";

function DisplayQues({apiRes}){
       return(
        <MathJax>
        <h1>Display Ques component</h1>
        {
            apiRes.map((child) => {
                return <div key={uuidv4()}>{child.Question}</div>
            })
        }
        </MathJax>
    )
}

export default DisplayQues