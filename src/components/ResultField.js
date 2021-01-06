
function ResultField(props) {
    return(
        <div>
            <div className = "card text-white" id="ans">
          <div>{props.password}</div>
          <input id='copy' type="button" onClick={props.copyText} value="Click to copy" />
                           
         </div>

             <div>
             <p>LENGTH: <span style={{color:"white", padding: '5px'}}>{props.NumRange}</span></p>
             </div>

             <div className ="card text-white" id="ans">
             <div>
             <label htmlFor="minRange" id="minRange">4</label>
             <input type="range" id="r" max={32} min={4} value={props.NumRange} onChange={props.getRange} />
            <label htmlFor="maxRange" id="maxRange">32</label>
            </div>
            </div>
        </div>
    );
}

export default ResultField