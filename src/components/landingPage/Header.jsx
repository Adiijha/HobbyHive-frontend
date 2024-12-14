import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
        <div className="w-full h-20  border-b-2 pb-5 bg-somig border-chgrey flex flex-row justify-between items-center px-8 pt-4 font-bnt">
            <div className="flex flex-row gap-16">
                <span className="text-chblack font-bold text-5xl">HOBBYHIVE</span>
            </div>
            <div className="flex gap-4">
                <Link to="/signin"><button className="w-28 h-10 text-xl text-white bg-black rounded-3xl">Sign In</button></Link>
                <Link to="/signup"><button className="w-28 h-10 text-xl bg-white rounded-3xl">Sign Up</button></Link>
            </div>
        </div>
    </>
  )
}

export default Header