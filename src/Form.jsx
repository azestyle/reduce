import React,{ useReducer } from "react";
import NameInput from "./Nameinput";
import EmailInput from "./Emailinput";
import SurnameInput from "./Surnameinput";
import { initialState } from "./Handlestate";
import { reducer } from "./Handlestate";

function FormInput({submit}){
const [state, dispatch] = useReducer(reducer, initialState);

 function Handleformsubmit(el){
    el.preventDefault();
    if(!state.name || state.name.length < 4){
        alert('Ad qısadır yenidən daxil edin')
    }else{
   submit({name:state.name,email:state.email,surname:state.surname});
     dispatch({type:'reset'})
    }
}
 return(
    <form onSubmit={Handleformsubmit} className="form">
        <div className="inputs">
             <NameInput value={state.name} changed={(value)=>dispatch({type:'name',payload:value})}/>
             <SurnameInput value={state.surname} changed={(value)=>dispatch({type:'surname',payload:value})}/>
            <EmailInput value={state.email} changed={(value)=>dispatch({type:'email',payload:value})}/>
        </div>
     
      <input type="submit" value="Göndər"  className="submit"/>
    </form>
 )
}
 export default FormInput;