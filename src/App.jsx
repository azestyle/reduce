import "./style.css";
import React, {  useReducer  } from "react";
import FormInput from "./Form";
import UiText from "./Uitext";

const initialState = [];

function reducer(state, action) {
  switch (action.type) {
    case 'data':
      return [...state, action.payload];
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
 
  function Keepinformaiton(event){
    dispatch({type:'data', payload:event});
  }

  const Handletext = state.map((ev, index) => (
    <UiText key={index} name={ev.name} surname={ev.surname} email={ev.email} />
  ));

  return (
    <div className="App">
      <div className="formdiv">
        <FormInput submit={Keepinformaiton} />
      </div>
      <div className="textbox">
        {Handletext}
      </div>
    </div>
  );
}

export default App;
