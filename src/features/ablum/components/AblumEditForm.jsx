"use client";
import { updateAlbum } from '@/services/ablum';
import React from 'react'
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

const AblumEditForm = ({elector_id}) => {
    const{register,reset,formState:{
        errors,isSubmitting
    },handleSubmit}=useForm()
  const onSubmit=async(data)=>{
    try{
          const   res=await updateAlbum(data,elector_id)
          const json=await res.json() 
          if(!res.ok){
           throw  new Error(json.message)
          }
          toast.success(json.message)
          reset()
    }catch(error){
        toast.error(error.message)
    }
  }
  return (
<form action="" onSubmit={handleSubmit(onSubmit)}>
    <div className="grid  grid-cols-3 gap-10 grid-rows-3 gap-y-15">
    <div className="space-y-2">
            <label htmlFor="" className='block'>photo 1</label>
            <input type="file" {...register("photo1")}  className='block border border-stone-200 py-1 px-3' />
        </div>
        <div className="space-y-2">
            <label htmlFor="" className='block'>photo 2</label>
            <input type="file" {...register("photo2")} className='block border border-stone-200 py-1 px-3' />
        </div>
        <div className="space-y-2 col-start-1">
            <label htmlFor="" className='block'>photo 3</label>
            <input type="file" {...register("photo3")}  className='block border border-stone-200 py-1 px-3' />
        </div>
        <div className="space-y-2 ">
            <label htmlFor="" className='block'>photo 4</label>
            <input type="file" {...register("photo4")} className='block border border-stone-200 py-1 px-3' />
        </div>
        <div className="col-start-1 col-span-2  w-[105%]">
        <button type='submit' className=' mt-10 bg-blue-600 w-full py-2 hover:opacity-90  duration-300  disabled:opacity-75  active:scale-95 text-white  '>update</button>
        </div>
    </div>
</form>
  )
}

export default AblumEditForm