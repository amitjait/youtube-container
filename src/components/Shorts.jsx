import React from "react";
import Short from "./Short";

const shorts = ["eVvmqSfQnFQ","GKaW94kzoL8", "hxU5NwrX9Kk", "m2Rp0ZasL4c"]
const Shorts = () =>{

    return(
        <div className="shorts">
            <h1>Shorts</h1>
            <div className="shorts-box">
                {
                    shorts.map((shortId) => <Short shortId={shortId}/>)
                }
            </div>
        </div>
    )
}

export default Shorts;