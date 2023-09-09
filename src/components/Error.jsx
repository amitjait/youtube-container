import React from "react";
import error from "../images/404.png"
const Error = () =>{

    return(
        <div className="error">
            <img src={error} alt="404"/>              
        </div>
    )
}


export default Error;