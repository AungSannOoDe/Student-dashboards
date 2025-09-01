import useAccountStore from '@/stores/useAccountStore'
import React from 'react'

const ChampionFemaleCard = ({female:{
    elector_name,id:elector_id,image_1_url
  }}) => {
  return (
<div className="  w-full ">
    <div>
     {
      image_1_url==null ? (
        <img src={`../image-not-found.png`} alt="" className="object-cover w-[100%] h-[280px]" />
      ) : (
       <img src={image_1_url} alt="" className="object-cover w-[100%] " />
      )
    }
     <div className="flex justify-start  mt-2">
        <p className='text-md  font-bold '>{elector_name}</p>
      </div>
      <div className="flex justify-between  mt-3">
        <Link href={`/clients/female/${elector_id}`} className="underline text-stone-600">View Details</Link>
      </div>
    </div>
 </div>
  )
}

export default ChampionFemaleCard