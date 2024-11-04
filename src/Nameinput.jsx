import React from "react";

function NameInput({value,changed}){
    function Handlename(el){
        return changed(el.target.value)
    }
    return(
        <div>
            <label>ad:</label>
            <input type="text" 
            value={value}
            onChange={Handlename}/>
        </div>
        
    )
}

export default NameInput;