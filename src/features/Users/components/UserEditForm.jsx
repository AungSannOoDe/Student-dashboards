"use client"
import React,{useCallback} from 'react'
import { Controller, useForm } from 'react-hook-form';
import TextEditing from '@/components/CommentEditing';
const UserEditForm = () => {
const {register,reset,
    control,
    formState:{
    errors,isSubmitting
}}=useForm({
    mode:"onTouched"
})
  return (
 <form action="" className='mt-3'>
    <div className="grid  grid-cols-3 gap-x-10 gap-y-8 grid-rows-4 ">
    <div className="space-y-2">
            <label htmlFor="" className='block'>Elector Name</label>
            <input type="text" className='block border w-full border-stone-200 py-1 px-3' />
        </div>
        <div className="space-y-2">
            <label htmlFor="" className='block'>phone</label>
            <input type="text" className='block w-full border border-stone-200 py-1 px-3' />
        </div>
        <div className="space-y-2 col-start-1">
            <label htmlFor="" className='block'>Major</label>
            <select name="" id="" className='block w-full border border-stone-200 py-1 px-3'>
<option value="">Select..</option>
            </select>
        </div>
        <div className="space-y-2 ">
            <label htmlFor="" className='block'>Years</label>
            <input type="date" className='block w-full border border-stone-200 py-1 px-3' />
        </div>
        <div className="space-y-2 col-start-1">
                    <label htmlFor="" className='block'>Gender</label>
                    <select name="" id="" className='block w-full border border-stone-200 py-1 px-3'>
        <option value="">Select..</option>
                    </select>
                </div>
                <div className="space-y-2 ">
                    <label htmlFor="" className='block'>Won Status</label>
                    <select name="" id="" className='block w-full border border-stone-200 py-1 px-3'>
        <option value="">Select..</option>
                    </select>
                </div>
                <div className="col-start-1 col-span-2 row-span-5">
          <TextEditing/>
                </div>
        <div className="col-start-1 col-span-2  w-[105%]">
        <button className='  bg-blue-600 w-full py-2 hover:opacity-90  duration-300  disabled:opacity-75  active:scale-95 text-white  '>Create</button>
        </div>
            
    </div>
</form>
  )
}

export default UserEditForm