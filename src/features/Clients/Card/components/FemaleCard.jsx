import { BookMarked } from 'lucide-react'
import React from 'react'
import useCreateTemp from '../hooks/useCreateTemp';
import Link from 'next/link';
import useAccountStore from '@/stores/useAccountStore';

const FemaleCard = ({female:{
  elector_name,id:elector_id,image_1_url
}}) => {
  const{handleSubmit,onSubmit,register,ref
  }=useCreateTemp();
  const{VoteFemale}=useAccountStore()
  return (
    <div className="  w-full ">
    <form  onSubmit={handleSubmit(onSubmit)}>
      <input type="hidden"defaultValue={ref.current} {...register("voter_id")} />
    <input type="hidden" defaultValue={elector_id} {...register("elector_id")} />
     {
      image_1_url==null ? (
        <img src={`../image-not-found.png`} alt="" className="object-cover w-[100%] h-[280px]" />
      ) : (
       <img src={image_1_url} alt="" className="object-cover w-[100%] " />
      )
    }
   
      <div className="flex justify-between  mt-2">
        <p className='text-md  font-bold '>{elector_name}</p>
        {
          VoteFemale=="1" ?(
            " "
          ):(
            <button className="outline-1 px-3 py-1 self-center bg-stone-50 outline-stone-600"><BookMarked /></button>
          )
        }  
      </div>
      <div className="flex justify-between  mt-3">
        <Link href={`/clients/${elector_id}`} className="underline text-stone-600">View Details</Link>
      </div>
    </form>
 
 </div>
  )
}

export default FemaleCard