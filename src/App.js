import './App.css';
import {useState} from 'react';

function App() {
  //This calc to show the input string of all operators and operands
  const [calc,setCalc]=useState("");
  //This result to show the actual calculated result
  const [result,setResult]=useState("");
  //This ops is used as operators in calculate function
  //They are in char form but they are converted first and then they are used as operators
  const ops = ['/','*','-','+','.'];

  const updateCalc = value =>{
    // This if statement says if value is an operator and
    // calc has nothing or value is an operator and calc
    // last value is also an operator then it will return
    // and do nothing
    if(
      ops.includes(value) && calc === '' ||
      ops.includes(value) && ops.includes(calc.slice(-1)
      )
    ){
      return ;
    }
    setCalc(calc + value);
    if(!ops.includes(value)){
      setResult(eval(calc+value).toString());
    }
  }
  //We created this function to create buttons 
  const createDigits = ()=>{
    const digits=[]

    for(let i=1;i<10;i++){
      digits.push(
        // This function over here is converting int to
        // char and as well as its providing the functionality
        // of when clicked the digits then display it to 
        // screen
        <button
          onClick={() => updateCalc(i.toString())}
          key={i}>
          {i}
        </button>
      )
    }

    return digits;
  }

  const calculate = () =>{
    setCalc(eval(calc).toString());
  }

  const deleteLast = () =>{
    if(calc == ''){
      return ;
    }
    const value = calc.slice(0,-1);
    setCalc(value);
  }

  return (
    <>
    <div className='App'>
      <div className="calculator">
        <div className="display">
          {result ?  <span>({result})</span> : ''}&nbsp;
          {calc || "0"}
        </div>

        <div className="operators">
          <button onClick={() => updateCalc('/')}>/</button>
          <button onClick={() => updateCalc('*')}>x</button>
          <button onClick={() => updateCalc('-')}>-</button>
          <button onClick={() => updateCalc('+')}>+</button>

          <button onClick={deleteLast}>DEL</button>
        </div>

        <div className="digits">
          {createDigits()}
          <button onClick={() => updateCalc('0')}>0</button>
          <button onClick={() => updateCalc('.')}>.</button>
          <button onClick={calculate}>=</button>
          
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
