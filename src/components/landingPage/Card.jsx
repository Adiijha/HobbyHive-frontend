import React from 'react'
import dummy from '../../assets/dummy.png'

function Card({number, heading, description}) {
  return (
    <> 
    <div className="w-full flex justify-start flex-col mt-16">
    <div className=""><img src={dummy} className="h-52 w-full rounded-3xl mb-2" alt="" /></div>
    <div className="flex justify-start w-80">
    <div className="font-awe text-4xl mr-2">{number}</div>
        <span className="font-awe text-3xl mt-1 ">{heading}</span>
    </div>
        <p className="mt-3 font-awe text-2xl flex text-left justify-start pl-6 w-80 pb-10">{description}</p>
    </div>
    </>
  )
}

export default Card