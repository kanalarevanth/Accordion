import React, {useState } from 'react'; 
import './Acco.css'
function Acco({questions, answers, id, active, setactive}) {
    const [state, setstate] = useState(false)
    const handleclick = () =>{
        setstate((active===id) && (state) ? false : true) 
        setactive(id)
    }
  return (
    <div className="maincontainer"> 
        <div className="qsts"> 
            <h3>{questions}</h3> 
            <p onClick={handleclick}>{(active===id) && (state) ?<p><i class="fas fa-chevron-up"></i></p>: <p><i class="fas fa-chevron-down"></i></p>}</p>
        </div> 
        <div className={(active===id) && (state) ? "ans" : "notshow"}>
        <p >{answers}</p> 
        </div>
    </div>
  );
}

export default Acco;