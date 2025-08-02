import { BookMarked } from 'lucide-react'
import React from 'react'

const FemaleCard = ({female:{
  elector_name
}}) => {
  return (
    <div className="  w-full ">
    <img src={`/images/1.png`} alt="" className="object-cover w-[100%] " />
    <div className="flex justify-between mt-1">
      <p className='text-lg font-bold'>{elector_name}</p>
       <button className="outline-1 px-3 py-1 self-center bg-stone-50 outline-stone-600"><BookMarked /></button>
    </div>
    <div className="flex justify-between mt-3">
      <button className="underline text-stone-600">View Details</button>
      <button className="bg-blue-400  text-white px-3 py-1 rounded-xs">Select</button>
    </div>
   </div>
  )
}

export default FemaleCard