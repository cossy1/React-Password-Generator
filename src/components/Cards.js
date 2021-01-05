import React, {useState} from 'react';
import '../index.css';
import GetChars from './GetChars';



function Cards(){
    let [NumRange, setNumRange] = useState(4);
    let [UpperCase, setUpperCase] = useState(false);
    let [LowerCase, setLowerCase] = useState(false);
    let [SymbolCase, setSymbolCase] = useState(false);
    let [DigitCase, setDigitCase] = useState(false);
    let [Password, setPassword] = useState("");

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
        function copyText(){
            let r = document.createRange();
            r.selectNode({Password});
            window.getSelection().removeAllRanges();
            window.getSelection().addRange(r);
            document.execCommand("copy");
        }


    return(
        <div>
        <div className = "card text-white" id="ans">
          <div>{Password}</div>
          <input id='copy' type="button" onClick={copyText} value="Click to copy" />
                           
         </div>

             <div>
             <p>LENGTH: <span style={{color:"white"}} id="numberRange">{NumRange}</span></p>
             </div>

            <div className = "card text-white" id="ans">
             <div  className="stripe">
             <label htmlFor="minRange" id="minRange">4</label>
             <input type="range" id="r" max={32} min={4} value={NumRange} onChange={getRange} />
            <label htmlFor="maxRange" id="maxRange">32</label>
            </div>
            </div>

            <div className = "card text-white" id="ans">
              <div className="word">Include Uppercase</div>
                            
                 <div id="toggle">
                  <label className="switch">
                  <input type="checkbox" onClick={addUpper} id="up" />
                 <span className="slider round"></span>
                </label>
               </div>
                            
              </div>
            
                        <div className = "card text-white" id="ans">
                            <div className = "word">Include Lowercase</div>
            
                            <div id="toggle" >
                                <label className="switch">
                                    <input type="checkbox" onClick={addLower} />
                                    <span className="slider round"></span>
                                </label>
                            </div>
                        </div>
            
                        <div className = "card text-white" id="ans">
                            <div className = "word">Include Numbers</div>
            
                            <div id="toggle">
                                <label className="switch">
                                    <input type="checkbox" onClick={addDigit} /> 
                                    <span className="slider round"></span>
                                </label>
                            </div>
                        </div>
            
                        <div className = "card text-white" id="ans">
                            <div className = "word">Include Symbols</div>
            
                            <div id="toggle">
                                <label className="switch">
                                    <input type="checkbox" onClick={addSymbol}/>
                                    <span className="slider round"></span>
                                </label>
                            </div>
                        </div>
                        
                        <div className = "card text-white" id="ans">
                                <button onClick={generatePassword} type="button" className="btn btn-primary">
                                Generate Password
                                </button>
                            
                            </div>
                        </div>
        

        
    );
}

export default Cards