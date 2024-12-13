import React from 'react'
import Newsletter from './Newsletter'
import About from './About'

function Hero() {
  return (
    <>
        <div className="w-full h-auto bg-gradient-to-r from-somig to-beige pt-28 p-20 flex flex-col justify-center items-center text-center"> 
            <div className="w-full h-screen text-black border-b-2 border-chgrey">
            <div className="">
            <span className="font-bnt text-black text-8xl">UNLEASH YOUR PASSION AND CONNECT!</span>
            <p className="font-awe mt-1 text-3xl text-chblack">Discover, share, and grow with like-minded individuals from around the world in a vibrant, engaging community</p>
            </div>
            <div className="pt-12 font-bnt flex gap-10 justify-center">
                <button className="text-2xl p-3 px-12 bg-black text-white rounded-3xl hover:bg-mugrbl">Join Now</button>
                <button className="text-2xl p-3 px-6 border-2 border-black rounded-3xl">Explore Communities</button>
            </div>
            </div>
        <About/>
        <div className="">
        <Newsletter/>
        </div>
        </div>
    </>
  )
}

export default Hero