import { MathJax } from "better-react-mathjax";
import { v4 as uuidv4 } from 'uuid';
import React from "react";
import './Css/style.css'

function DisplayQues({apiRes,quesNo}){
       return(
        <MathJax>
        <h1 className="Heading">Display Ques component</h1>
        <h3 className="Subheading">Interview Task</h3>
        <h5 className="QuesNo">Question: {quesNo}/3</h5>
        <div className="OuterDisplayQues">
        {
            apiRes.map((child) => {
                return <div className="DisplayQues" key={uuidv4()}>{child.Question}</div>
            })
        }
        </div>
        </MathJax>
    )
}

export default DisplayQues