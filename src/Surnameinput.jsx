import React from "react";


function SurnameInput({value,changed}){
   function Handlesurname(el){
    return changed(el.target.value)
   }
   return(
    <div>
        <label>soyad:</label>
        <input type="text"
        value={value}
        onChange={Handlesurname} />
    </div>
   )
}
export default SurnameInput;