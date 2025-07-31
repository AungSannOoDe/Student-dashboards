"use client";
import CommentEditing from '@/components/CommentEditing'
import { electorApiUrl, updateElector } from '@/services/electors';
import { values } from 'lodash';
import { useRouter } from 'next/navigation';
import React,{useRef} from 'react'
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { useSWRConfig } from 'swr';
import { json } from 'zod';

const ElectorEditForm = ({elector:{
  elector_name,id,Years,phone,gender,won_status,address
}}) => {
  console.log(address);
  const editorRef = useRef();
  const { mutate } = useSWRConfig();
  const router = useRouter();
  const {setValue,register,handleSubmit,reset,formState:{
    errors,isSubmitting
  },}=useForm({
    defaultValue:{
      address:"Default Address",
    }
  });
const onSubmit=async(data)=>{
  try{
    const res=await updateElector(id,{
        elector_name:data.elector_name,
        phone:data.phone,
        Years:data.Years,
        gender:data.gender,
        address:data.address,
        won_status:data.won_status
    })
    const json=await res.json()
    if(!res.ok){
       throw new Error(json.message|| "Undefined Error")
    }
    mutate(`${electorApiUrl}/${id}`);
     toast.success(json.message);
     if(data.back_to_elector_list){
      router.push(`/dashboard/elector`)
     }
      reset();
  }catch(error){
   toast.error(error.message)
  }
}
  return (
 <form action="" className="mt-3" onSubmit={handleSubmit(onSubmit)} >
      <div className="grid  grid-cols-3 gap-x-10  grid-rows-5 ">
        <div className="">
          <label htmlFor="" className="block">
            Elector Name
          </label>
          <input
            defaultValue={elector_name}
            type="text"
            {...register("elector_name",{
              required: "Elector name is required",
              minLength: {
                value: 3,
                message: "Elector name must be at least 3 characters long"
              },
              maxLength: {
                value: 50,
                message: "Elector name must not exceed 50 characters"
              }
            })}
            className="block border w-full border-stone-200 py-1 px-3"
          />
          {
            errors.elector_name && (
              <span className="text-red-500 text-xs">
                {errors.elector_name.message}
              </span>
            )
          }
        </div>
        <div className="">
          <label htmlFor="" className="block">
            phone
          </label>
          <input
            type="text"
            defaultValue={phone}
            {...register("phone",{
              required: "Phone number is required",
            })}
            className="block w-full border border-stone-200 py-1 px-3"
          />
           {
            errors.phone && (
              <span className="text-red-500 text-xs">
                {errors.phone.message}
              </span>
            )
          }
        </div>
        <div className=" col-start-1">
          <label htmlFor="" className="block">
            Gender
          </label>
          <select
            defaultValue={gender}
            {...register("gender")}
            className="block w-full border border-stone-200 py-1 px-3"
          >
            <option value="">Select..</option>
            <option value="male" selected={gender === 'male'}>Male</option>
            <option value="female" selected={gender === 'female'}>Female</option>
          </select>
        </div>
        <div className=" ">
          <label htmlFor="" className="block">
            Years
          </label>
          <input
            type="date" 
             {...register("Years",{
              required: "Years is required"
             })}
            defaultValue={Years} 
            className="block w-full border border-stone-200 py-1 px-3"
          />
        </div>
        <div className=" col-start-1">
          <label htmlFor="" className="block">
            Gender
          </label>
          <select
            name=""
            id=""
            className="block w-full border border-stone-200 py-1 px-3"
          >
            <option value="">Select..</option>
          </select>
        </div>
        <div>
          <label htmlFor="" className="block">
            Won Status
          </label>
{
  gender==="male" ? (
  <select
  {...register("won_status")}
  defaultValue={won_status}
    name=""
    id=""
    className="block w-full border border-stone-200 py-1 px-3"
  >
    <option value="0">Select..</option>
    <option value="1">King</option>
    <option value="2">Prince</option>
  </select>
  ):(
  <select
    name=""
    id=""
    className="block w-full border border-stone-200 py-1 px-3"
  >
    <option value="0">Select..</option>
    <option value="1">Queen</option>
    <option value="2">Princencess</option>
  </select>
  )
}

          
        </div>
        <div className="col-start-1 col-span-2 row-span-5">
           <label htmlFor="" className="font-bold">
            Address
          </label>
          <CommentEditing  ref={editorRef} address={address}  onChange={(value) => setValue("address", value)} />
          <input
            type="hidden"
            defaultValue={address}
            {...register("address", { required: "Address is required" })}
          />
          {errors.address && (
            <span className="text-red-500 text-xs">{errors.address.message}</span>
          )}
        </div>
        <div className="col-span-full mt-5">
        <div className="flex items-center mb-4">
          <input
            required
            id="all-correct"
            type="checkbox"
            className="w-4 h-4 accent-blue-600 text-blue-600 checked:bg-blue-500 checked:text-blue-600 bg-stone-100 border-stone-300 focus:ring-blue-500"
          />
          <label
            htmlFor="all-correct"
            className="ml-2 text-sm font-medium text-stone-900"
          >
            Make sure all fields are correct
          </label>
        </div>
    <div className="flex items-center mb-4">
      <input
        id="back-to-elector-list"
        type="checkbox"
        {...register("back_to_elector_list")}
        className="w-4 h-4 accent-blue-600 text-blue-600 bg-stone-100 border-stone-300 focus:ring-blue-500"
      />
      <label
        htmlFor="back-to-Employee-list"
        className="ml-2 text-sm font-medium text-stone-900"
      >
        Back to Elector List after saving
      </label>
    </div>
</div>


        <div className="col-start-1 col-span-2 mt-2  w-[105%]">
          <button className="  bg-blue-600 w-full py-2 hover:opacity-90  duration-300  disabled:opacity-75  active:scale-95 text-white  ">
            {
             isSubmitting? "updating" :"update"
            }
          </button>
        </div>
      </div>
    </form>
  )
}

export default ElectorEditForm