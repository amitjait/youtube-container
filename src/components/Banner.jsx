import React from "react";
import video from "../Videos/video.mp4";
import videoMb from "../Videos/mobile.mp4"

const Banner = () =>{

    return (
        <div className="banner">
            <video src={video} autoPlay loop muted className="video-bg-pc"/>
            <video src={videoMb} autoPlay loop muted className="video-bg-mb"/>
            {/* <img src={banner} alt="banner" /> */}
        </div>
    )
}


export default Banner;