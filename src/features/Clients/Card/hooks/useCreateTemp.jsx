"use client"
import { fetchtemp, storetemp } from '@/services/tempo';
import useAccountStore from '@/stores/useAccountStore';
import { useTempStore } from '@/stores/usetemp';
import { useRouter } from 'next/navigation';
import React,{useRef} from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner';
import { useSWRConfig } from 'swr';
const useCreateTemp = () => {
    const{account}  = useAccountStore();
    const { triggerRefresh } = useTempStore();
    const ref=useRef(account.id);
     const{handleSubmit,register}=useForm();
     const{mutate}=useSWRConfig()
     const onSubmit=async(data)=>{
        console.log(data);
       try{
         const res=await storetemp(data);
         const json=await res.json();
         if(!res.ok){
           throw new  Error(json.message||"Undefined Error")
         }
         toast.success(json.message)
         triggerRefresh()
       }
       catch(error){
    toast.error(error.message)
       }
       
     }
  return{
handleSubmit,
register,
onSubmit,
ref,
  }
}

export default useCreateTemp