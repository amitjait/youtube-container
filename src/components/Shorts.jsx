import React, { useEffect, useState } from "react";
import Short from "./Short";
import axios from "axios";

const Shorts = () =>{

    let [data, setData] = useState([]);

    useEffect(() =>{

        try{
            axios.get("https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&&maxResults=50&playlistId=PLIeSOZtk9aECfgghoshSZrw3i7FQz1ApF&key=AIzaSyBm4LNqzkWbgyrdEhrWXIeJxGpZHtigGsg")
            .then((res) => setData(res.data.items))
            .catch((e) => console.log("Error", e));
        }catch(e){
            console.log("Error", e);
        }
    }, [])

    console.log(data);

    return(
        <div className="shorts">
            <h1>Shorts</h1>
            <div className="shorts-box">
                {
                    data.map((item) => <Short shortId={item.snippet.resourceId.videoId} />)
                }
            </div>
        </div>
    )
}

export default Shorts;