"use client";
import { fetchtemp, storetemp } from '@/services/tempo';
import useAccountStore from '@/stores/useAccountStore';
import { useTempStore } from '@/stores/usetemp';
import { BookMarked } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React,{useRef} from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner';
import { useSWRConfig } from 'swr';
const MaleCard = ({male:{id:elector_id,
  elector_name
}}) => {
 const{account}  = useAccountStore();
 const { triggerRefresh } = useTempStore();
 const ref=useRef(account.id);
 
  const{handleSubmit,register}=useForm();
  const{mutate}=useSWRConfig()
  const onSubmit=async(data)=>{
    try{
      const res=await storetemp(data);
      const json=await res.json();
      if(!res.ok){
        throw new  Error(json.message||"Undefined Error")
      }
      toast.success(json.message)
      mutate(`${fetchtemp}/${account.id}`,fetchtemp)
      triggerRefresh()
    }
    catch(error){
 toast.error(error.message)
    }
    
  }
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
          <button  type='submit' className="bg-blue-400  text-white px-3 py-1 rounded-xs">Select</button>
        </div>
      </form>
   
   </div>
  )
}

export default MaleCard