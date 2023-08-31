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
                <div className="list">
                    <ul>
                        <NavLink to="/"><li>HOME</li></NavLink>
                        <NavLink to="/videos"><li>VIDEOS</li></NavLink>
                        <NavLink to="shorts"><li>SHORTS</li></NavLink>
                        <span class="borderIndicator"></span>
                    </ul>
                    <div className="icons">
                        <a href="https://www.instagram.com/t_hunt_gaming/" target="_blank" rel="noreferrer"><i class="fa-brands fa-instagram"></i></a>
                        <a href="https://www.facebook.com/profile.php?id=100080985040192" target="_blank" rel="noreferrer"><i class="fa-brands fa-square-facebook"></i></a>
                        <a href="https://www.youtube.com/@TreasureHuntGaming" target="_blank" rel="noreferrer"><i class="fa-brands fa-youtube"></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navabar;