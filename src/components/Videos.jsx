import React from "react";
import Video from "./Video";

const videosId = ["_a9QIkpXp1w","VpSmcil6IwM","B4ShlSW_RaI","BwJlK6XHSDc", "an3DXS7CD8A", "2FaRIDna5dc", "GLpO9a5WfFg", "eN0ac7VyKCk"];

const Videos = ()=>{

    return (
        <div className="videos">
            <h1>Videos</h1>
            <div className="videos-box">
                {
                    videosId.map((videoId) => <Video videoId={videoId}/>)
                }
            </div>
        </div>
    )
}

export default Videos;