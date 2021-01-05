
function Card(props){  
    return(
        <div>

            <div className = "card text-white" id="ans">
              <div className="word">{props.text}</div>
                            
                 <div id="toggle">
                  <label className="switch">
                  <input type="checkbox" onClick={props.type} id="up" />
                 <span className="slider round"></span>
                </label>
               </div>
                            
              </div>
            
        </div>
        
    );
}

export default Card