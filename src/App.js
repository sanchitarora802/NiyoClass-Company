import { useEffect, useState } from 'react';
import './App.css';
import DisplayQues from './Components/DisplayQues';
import NextButton from './Components/NextButton';
import PreviousButton from './Components/Previous';

function App() {
  const QuestionID = ['AreaUnderTheCurve_901','BinomialTheorem_901','DifferentialCalculus2_901'];
  const [apiRes,setApiRes] = useState([]);
  useEffect(()=>{
    fetchdata(0)
    return () => {}
},[])

  const fetchdata = async(tracker) =>{
    try{ const response = await fetch(`https://0h8nti4f08.execute-api.ap-northeast-1.amazonaws.com/getQuestionDetails/getquestiondetails?QuestionID=${QuestionID[tracker]}`);
    setApiRes(await response.json());
    localStorage.setItem('tracker',JSON.stringify(tracker))   // store done
  }
  catch(e){
    console.log(e)
  }
   
}

  return (
    <>
      <DisplayQues apiRes={apiRes}/>
      <NextButton fetchdata={fetchdata}/>
      <PreviousButton fetchdata={fetchdata}/>
    </>
  );
}

export default App;
