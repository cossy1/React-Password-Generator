import './App.css';
import './index.css';
import React, { useState, useRef } from "react";
import Title from './components/Title';
import ResultField from './components/ResultField'
import GenerateBtn from './components/GenerateBtn';
import Card from './components/Card';
import GetChars from './components/GetChars';


function App() {

  let [Password, setPassword] = useState("");
  let [NumRange, setNumRange] = useState(4);
  let [UpperCase, setUpperCase] = useState(false);
  let [LowerCase, setLowerCase] = useState(false);
  let [SymbolCase, setSymbolCase] = useState(false);
  let [DigitCase, setDigitCase] = useState(false);
  const pass = useRef(Password);


  function addUpper(){
      setUpperCase(UpperCase = !UpperCase)
  }

  function addLower(){
      setLowerCase(LowerCase = !LowerCase)
  }

  function addDigit(){
      setDigitCase(DigitCase = !DigitCase)
  }

  function addSymbol(){
      setSymbolCase(SymbolCase = !SymbolCase)
  }

  function getRange(e){
          setNumRange(NumRange = e.target.value)
  }

  function generatePassword(){
    const digitCase = DigitCase;
    const upCase = UpperCase;
    const lowCase = LowerCase;
    const symbolCase = SymbolCase;

    setPassword(
        Password = GetChars(NumRange, upCase, lowCase, digitCase, symbolCase)
    );
}

 // function to copy text to clipboard
function copyText(e) {
  navigator.clipboard.writeText(e)
}



  return (
    <div className="main-container">
      <div className="main">
      <Title />
      <ResultField password={Password} NumRange={NumRange} copyText={copyText(Password)} getRange={getRange} />
      <Card type={addUpper} text='Include Uppercase' />
      <Card type={addLower} text='Include Lowercase' />
      <Card type={addDigit} text='Include Numbers' />
      <Card type={addSymbol} text='Include Symbols' />
      <GenerateBtn generatePassword={generatePassword} />
      </div>      
    </div>
  );
}

export default App;
