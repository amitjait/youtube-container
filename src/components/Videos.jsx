import React, { useEffect, useState } from "react";
import Video from "./Video";
import axios from "axios";

// const videosId = ["oZVf6iIeypQ","_a9QIkpXp1w","VpSmcil6IwM","B4ShlSW_RaI","BwJlK6XHSDc", "an3DXS7CD8A", "2FaRIDna5dc", "GLpO9a5WfFg", "eN0ac7VyKCk"];

const Videos = ()=>{

    let [bgmi, setBgmi] = useState([]);
    let [cocData, setCOCData] = useState([]);

    useEffect(() =>{
        axios.get("https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&&maxResults=50&playlistId=PLIeSOZtk9aEA2a8ubH3J3BaE79PRHrPtT&key=AIzaSyBm4LNqzkWbgyrdEhrWXIeJxGpZHtigGsg")
        .then((res) => setBgmi(res.data.items))
        .catch((e) => console.log("Error", e));

        axios.get("https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&&maxResults=50&playlistId=PLIeSOZtk9aEDXo7Za1RaIl_IxvB_jchST&key=AIzaSyBm4LNqzkWbgyrdEhrWXIeJxGpZHtigGsg")
        .then((res) => setCOCData(res.data.items))
        .catch((e) => console.log("Error", e));
    }, [])

    console.log("BGMI", bgmi);
    console.log("COC", cocData);

    return (
        <div className="videos">
            <h1>Videos</h1>
            <div className="videos-box">

                {
                    bgmi.filter((item) => item.snippet.resourceId.videoId !== "K6lADS5nwMY" && item.snippet.resourceId.videoId !== "WVWPelJyDwc")
                    .sort((a, b) => new Date(b.snippet.publishedAt) - new Date(a.snippet.publishedAt))
                    .map((item) => <Video videoId={item.snippet.resourceId.videoId} />)
                }
                {
                    cocData
                    .sort((a, b) => new Date(b.snippet.publishedAt) - new Date(a.snippet.publishedAt))
                    .map((item) => <Video videoId={item.snippet.resourceId.videoId} />)
                }
            </div>
        </div>
    )
}

export default Videos;