import React from "react";
import Videos from "./Videos";
import Shorts from "./Shorts";
import Banner from "./Banner";

const Home = () =>{

    return(
        <div className="home">
            <Banner />
            <Videos />
            <Shorts />
        </div>
    )
}


export default Home;