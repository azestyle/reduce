import React from "react";

function UiText({name,email,surname}){
return(
    <div className="text">
        <p>Ad: {name}</p>
        <p>Soyad: {surname}</p>
        <p>Email: {email}</p>
    </div>
)
};

export default UiText;