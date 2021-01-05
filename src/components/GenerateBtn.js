

function GenerateBtn(props) {
    return(
        <div className = "card text-white" id="ans">
          <button onClick={props.generatePassword} type="button" className="btn btn-primary">
          Generate Password
         </button>                      
                            
        </div>
    );
}

export default GenerateBtn