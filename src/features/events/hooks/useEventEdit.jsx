"use client";
import { updateAlbum } from '@/services/ablum';
import { eventApiUrl, updateEvent } from '@/services/event';
import { useRouter } from 'next/navigation';
import React from 'react'
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { mutate } from "swr";

const useEventEdit = (event) => {
    const router=useRouter();
    const{register,reset,formState:{
        errors,isSubmitting
    },handleSubmit}=useForm({
        defaultValues: {
            id:event?.id||"",
            event_name: event?.event_name || "",
            event_participant: event?.event_participant || "",
            event_start_time: event?.event_start_time || "",
          },
    })
    const onSubmit=async(data)=>{
        try{
         const res=await updateEvent(data,data.id)
         const json=await res.json()
         if(!res.ok){
            throw  new  Error(`${json.message}`)
         }
            
            toast.success(`${json.message}`)
            reset()
            router.push(`/dashboard/events`)
            mutate(`${eventApiUrl}/${data.id}`);
        }
        catch(error){
  toast.error(error.message)
        }

    }
  return {
    isSubmitting,
    reset,
    handleSubmit,
    register,
    errors,
    onSubmit
  }
}

export default useEventEdit