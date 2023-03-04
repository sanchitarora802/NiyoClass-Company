import { MathJaxContext } from 'better-react-mathjax';
import { useEffect, useState } from 'react';
import './App.css';
import Buttons from './Components/Buttons';
import DisplayQues from './Components/DisplayQues';

function App() {
  let intialRender = true;
  const QuestionID = ['AreaUnderTheCurve_901','BinomialTheorem_901','DifferentialCalculus2_901'];
  const [apiRes,setApiRes] = useState([]);
  const [quesNo,setQuesNo] = useState();
  useEffect(()=>{
    if (intialRender)
    fetchdata(0)
    intialRender=false;
    return () => {}
},[])

  const fetchdata = async(Questiontracker) =>{
    try{ const response = await fetch(`https://0h8nti4f08.execute-api.ap-northeast-1.amazonaws.com/getQuestionDetails/getquestiondetails?QuestionID=${QuestionID[Questiontracker]}`);
    setQuesNo(await Questiontracker + 1)
    setApiRes(await response.json());
    localStorage.setItem('Questiontracker',JSON.stringify(Questiontracker))
  }
  catch(e){
    console.log(e)
  }
   
}

  return (
    <MathJaxContext>
      <DisplayQues quesNo={quesNo} apiRes={apiRes}/>
      <Buttons fetchdata={fetchdata}/>
    </MathJaxContext>
  );
}

export default App;
