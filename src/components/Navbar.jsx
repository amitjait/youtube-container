import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../images/thg.png';

const Navabar = ()=>{

    return (

        <div className="nav">
            <div className="nav-box">
                <div className="img-container">
                    <img src={logo} alt="T H G" />
                </div>
                <ul>
                    <NavLink to="/"><li>ALL</li></NavLink>
                    <NavLink to="/videos"><li>VIDEOS</li></NavLink>
                    <NavLink to="shorts"><li>SHORTS</li></NavLink>
                </ul>
            </div>
        </div>
    )
}

export default Navabar;