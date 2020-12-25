import React from "react";
import '../index.css';


class PasswordGenerator extends React.Component{
    constructor(props){
        super(props);

        // initial state of num == 4
        this.state = {
            num:4,
        }
        this.getRange = this.getRange.bind(this);
        this.generatePassword = this.generatePassword.bind(this);
        this.getChars = this.getChars.bind(this);    
        this.copyText = this.copyText.bind(this);       
   

    }

    // get the length of expected password
    getRange(value){
        let range = value;
        document.getElementById("numberRange").innerHTML = range;
        this.setState({
            num : document.getElementById("numberRange").innerHTML
        });
       
        return this.state.num;
   }

   // function that generates the password
   generatePassword(){
    const digitCase = document.querySelector('#dig').checked;
    const upCase = document.querySelector('#up').checked;
    const lowCase = document.querySelector('#low').checked;
    const symbolCase = document.querySelector('#symb').checked;

    document.getElementById("gpassword").innerHTML = this.getChars(this.state.num, upCase, lowCase, digitCase, symbolCase);
}

getChars(length, isUpper, isLower, isDigit, isSymbol) {
    let lower = "abcdefghijklmnopqrstuvwxyz";
    let numbers = "0123456789";
    let symbols = "?_-@!~:.,{}[]^&%$#()*/\"'";
    let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let password = '';
    let randString = '';

    if (length) {
        if (isDigit)
            randString += numbers;

        if (isLower)
            randString += lower;

        if (isSymbol)
            randString += symbols;

        if (isUpper)
            randString += upper;
    }

    if (randString !== '') {
        for (let i = 0; i < length; i++) {
            password = password + randString.charAt(Math.floor(Math.random() * Math.floor((randString.length) - 1)));
        } 
    }

    else {
        alert('Kindly select a password choice');   
    }

    return password;
}

// function to copy text to clipboard
copyText(){
    let r = document.createRange();
    r.selectNode(document.getElementById('gpassword'));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(r);
    document.execCommand("copy");
}

    render(){

                return(
                    <div className="main-container">
                    <div className="main">
                        <h2 className="head">Password Generator</h2>
                        <div className = "card text-white" id="ans">
                            <div id = "gpassword"></div>
                            <input id='copy' type="button" onClick={this.copyText} value="Click to copy" />
                            
                        </div>
            
                        <div>
                            <p>LENGTH: <span style={{color:"white"}} id="numberRange">{this.state.num}</span></p>
                        </div>
            
                        <div className = "card text-white" id="ans">
                        
                            <div className="stripe">
                                <label htmlFor="minRange" id="minRange">4</label>
                            <input type="range" id="r" max={32} min={4} value={this.state.numRange} onChange={e => this.getRange(e.target.value)} />
                            <label htmlFor="maxRange" id="maxRange">32</label>
                            </div> 
                            
                            </div> 
            
                        <div className = "card text-white" id="ans">
                            <div className="word">Include Uppercase</div>
                            
                            <div id="toggle">
                                <label className="switch">
                                    <input type="checkbox" id="up" />
                                    <span className="slider round"></span>
                                </label>
                            </div>
                            
                            </div>
            
                        <div className = "card text-white" id="ans">
                            <div className = "word">Include Lowercase</div>
            
                            <div id="toggle" >
                                <label className="switch">
                                    <input type="checkbox" id="low" />
                                    <span className="slider round"></span>
                                </label>
                            </div>
                        </div>
            
                        <div className = "card text-white" id="ans">
                            <div className = "word">Include Numbers</div>
            
                            <div id="toggle">
                                <label className="switch">
                                    <input type="checkbox" id="dig" /> 
                                    <span className="slider round"></span>
                                </label>
                            </div>
                        </div>
            
                        <div className = "card text-white" id="ans">
                            <div className = "word">Include Symbols</div>
            
                            <div id="toggle">
                                <label className="switch">
                                    <input type="checkbox" id="symb" />
                                    <span className="slider round"></span>
                                </label>
                            </div>
                        </div>
                        
                        <div className = "card text-white" id="ans">
                                <button onClick={this.generatePassword} type="button" className="btn btn-primary">
                                Generate Password
                                </button>
                            
                            </div>
                        </div>
                        
                        
                        </div>                     
                    
                );
    }
}

export default PasswordGenerator;