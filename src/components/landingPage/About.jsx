import React from 'react'
import banner from '../../assets/banner.png'

function About() {
  return (
    <>
        <div className="w-full h-1/3 pt-16 flex flex-row justify-between border-b-2 border-chgrey">
        <div className="w-1/2 p-20">
            <span className="text-6xl font-awe font-semibold">What is HobbyHive?</span>
            <p className="text-2xl mt-6 font-awe">HobbyHive is the ultimate platform for hobby enthusiasts. From crafting to gaming, join communities tailored to your interests and connect with others who share your passion.</p>
        </div>
        <div className="w-1/2 h-auto">
            <div className="w-2/3 h-2/3 scale-110 mb-8"><img src={banner} alt="" /></div>
        </div>
        </div>
    </>
  )
}

export default About