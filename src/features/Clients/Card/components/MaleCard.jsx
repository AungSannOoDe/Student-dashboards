"use client";
import { BookMarked } from 'lucide-react'
import Link from 'next/link'
import useCreateTemp from '../hooks/useCreateTemp';
import useSWR from 'swr';
import { fetchvote, voteapiUrl } from '@/services/votes';
import useAccountStore from '@/stores/useAccountStore';
const MaleCard = ({male:{id:elector_id,
  elector_name
}}) => {
  const{handleSubmit,onSubmit,register,ref
  }=useCreateTemp();
  
  return (
    <div className="  w-full ">
      <form  onSubmit={handleSubmit(onSubmit)}>
        <input type="hidden"defaultValue={ref.current} {...register("voter_id")} />
      <input type="hidden" defaultValue={elector_id} {...register("elector_id")} />
      <img src={`/images/1.png`} alt="" className="object-cover w-[100%] " />
        <div className="flex justify-between  mt-2">
          <p className='text-md  font-bold '>{elector_name}</p>
           <button className="outline-1 px-3 py-1 self-center bg-stone-50 outline-stone-600"><BookMarked /></button>
        </div>
        <div className="flex justify-between  mt-3">
          <Link href={`/clients/${elector_id}`} className="underline text-stone-600">View Details</Link>
        </div>
      </form>
   
   </div>
  )
}

export default MaleCard