import React from 'react'
import './HeroSection.css'

function HeroSection() {
    return (
        <>
        <div className="hero-container">
            
            <video src ="/videos/video-2.mp4" autoPlay loop muted />
            
            <div className="text-box">
                <h1>Hello</h1>
            </div>
        </div>

        <h1 className="text-center ">Parag Coimbatore</h1>
        </>
    )
}

export default HeroSection
