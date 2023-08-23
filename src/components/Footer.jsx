import React from "react";

const Footer = () =>{


    return(
        <div className="footer-h">
            <div className="footer">
            <div className="contact-us">
                <h3>CONNECT WITH US</h3>
                <p><span><i class="fa-solid fa-envelope"></i> </span> thuntgaming591@gmail.com</p>
                <p><span><i class="fa-solid fa-mobile"></i></span> +91 74098 92423</p>
                <p><span><i class="fa-solid fa-location-dot"></i> </span>Agra, Uttar Pradesh, India</p>
                <br />
            </div>
            <div className="t-h-g">
                <h3>TREASURE HUNT GAMING</h3>
                <p><a href="/videos"><i class="fa-solid fa-video"></i> <span> Videos</span></a></p>
                <p><a href="/shorts"><i class="fa-solid fa-play"></i> <span> Shorts</span></a></p>
                <p><a href="/"><i class="fa-solid fa-address-card"></i> <span> Contact Us</span></a></p>
                <br />
                
            </div>
            <div className="media">
                <h3>SOCIAL MEDIA</h3>
                <div className="social">
                    <a href="https://github.com/amitjait/" target="_blank" rel="noreferrer"><i class="fa-brands fa-gitlab"></i></a>
                    <a href="https://www.instagram.com/t_hunt_gaming/" target="_blank" rel="noreferrer"><i class="fa-brands fa-instagram"></i></a>
                    <a href="https://www.facebook.com/profile.php?id=100080985040192" target="_blank" rel="noreferrer"><i class="fa-brands fa-square-facebook"></i></a>
                    <a href="https://www.youtube.com/@TreasureHuntGaming" target="_blank" rel="noreferrer"><i class="fa-brands fa-youtube"></i></a>
                    <a href="https://www.linkedin.com/in/amit-kumar-775311aa/" target="_blank" rel="noreferrer"><i class="fa-brands fa-linkedin"></i></a>                    
                </div>
                <br />
                <br />
                <br />
                ©Treasure Hunt Gaming, All rights reserved 2023
            </div>
        </div>
        </div>
    )
}

export default Footer;