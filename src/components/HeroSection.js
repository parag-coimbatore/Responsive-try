import React from 'react'
import './HeroSection.css'

function HeroSection() {
    return (
        <>
        <div className="hero-container col mx-3">
            
            <video src ="homepagePath/videos/video-2.mp4" autoPlay loop muted />
            
            <div className="text-box">
                <h1 className="text-styles">Lets explore the world</h1>
            </div>
        </div>

        <h1 className="text-center ">Parag Coimbatore</h1>
        </>
    )
}

export default HeroSection
