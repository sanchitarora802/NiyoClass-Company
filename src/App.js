import { useEffect, useState } from 'react';
import './App.css';
import DisplayQues from './DisplayQues';
import NextButton from './NextButton';

function App() {
  // const [tracker,setTracker] = useState(0);
  const QuestionID = ['AreaUnderTheCurve_901','BinomialTheorem_901','DifferentialCalculus2_901'];
  const [apiRes,setApiRes] = useState([]);
  useEffect(()=>{
    fetchdata(0)
    return () => {}
},[])

  const fetchdata = async(tracker) =>{
    console.log(tracker)
    const response = await fetch(`https://0h8nti4f08.execute-api.ap-northeast-1.amazonaws.com/getQuestionDetails/getquestiondetails?QuestionID=${QuestionID[tracker]}`);
    setApiRes(await response.json());
    localStorage.setItem('tracker',JSON.stringify(tracker))   // store done
}

  return (
    <>
      <DisplayQues apiRes={apiRes}/>
      <NextButton fetchdata={fetchdata}/>
    </>
  );
}

export default App;
