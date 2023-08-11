import React from "react";
import YouTube from "react-youtube";



const Short = ({shortId})=>{

    const opts = {
        height: '350',
        width: '220',
        playerVars: {
        autoplay: 0,
        },
    };

    return (
        <div className="video-container">
            <YouTube videoId={shortId} opts={opts} />
        </div>
    );
}


export default Short;