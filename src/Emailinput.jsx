import React from "react";

function EmailInput({value,changed}){
    function Handleemail(el){
        return changed(el.target.value)
    }
    return(
        <div>
            <label>email:</label>
            <input type="text"
            value={value} 
            onChange={Handleemail}/>
        </div>
    )

}

export default EmailInput;