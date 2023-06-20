import React, { useState} from "react";
import factsData from './facts';
import './facts.css';
import './video/galaxy.mp4';


const LandingPage=()=> {
    const [fact, setFact] = useState('');



const generateRandomFact = ()=>{
    const randomFact =factsData[Math.floor(Math.random() * factsData.length)]
    setFact(randomFact)
}

return(
    <div className="landing-page">
        <div className="video-container">
            <video  className="background-video" src={require('./video/galaxy.mp4')} autoPlay loop muted></video>
        </div>
        <div className="content">
            <h1 className="h1-space">Dive Into The Wonders Of Space</h1>
            <button className="button-space"onClick={generateRandomFact}>Explore</button>
            <FactDisplay fact={fact}/>
        </div>
    </div>
)
}

const FactDisplay = ({fact}) =>{
    return <p className="fact-display">{fact}</p>
}


export default LandingPage;
