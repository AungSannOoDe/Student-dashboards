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
  elector_name,id,years,phone,gender,won_status,address,description
}}) => {
  const editorRef = useRef();
  const { mutate } = useSWRConfig();
  const router = useRouter();
  const {setValue,register,handleSubmit,reset,formState:{
    errors,isSubmitting
  },}=useForm({
    defaultValues:{
      elector_name,
      phone,
      gender,
      years,
      won_status,
      address: address || "Default Address",
    }
  });
const onSubmit=async(data)=>{
  try{
    const res=await updateElector(id,{
        elector_name:data.elector_name,
        phone:data.phone,
        Years:data.years,
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
            {...register("phone", {
              required: "Phone number is required",
              validate: (value) => {
                if (!value) return "Phone number is required";
                const cleanedPhone = value.replace(/\D/g, '');
                const myanmarRegex = /^(\+?95|0)?(9|7|6)\d{7,9}$/;
                if (!myanmarRegex.test(cleanedPhone)) {
                  return "Please enter a valid Myanmar phone number";
                }
                return true;
              }
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
            {...register("gender",{
              required:"Gender is required"
            })}
            className="block w-full border border-stone-200 py-1 px-3"
          >
            <option value="">Select..</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className=" ">
          <label htmlFor="" className="block">
            Years
          </label>

          <select {...register("years",{
                required:"year is required"
            })}   className="block w-full border border-stone-200 py-1 px-3" id=""  >
            <option value="">select year...</option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
          </select>
             {errors.years && (
                <span className="text-red-500 text-xs">{errors.years.message}</span>
              )}
        </div>
        <div className="col-start-1">
          <label htmlFor="" className="block">
           address
          </label>
          <input 
            type="text" 
            {...register("address", {
              required: "address is required",
              minLength: {
                value: 3,
                message: 'address is at  least 3 lengths',
              },
            })} 
            className="block w-full border border-stone-200 py-1 px-3" 
          />
          {errors.address && (
            <span className="text-red-500 text-xs">{errors.address.message}</span>
          )}
        </div>
        <div className=' col-span-2'>
          <label htmlFor="" className="block">
            Won Status
          </label>
          <select
            {...register("won_status")}
            className="block w-full border border-stone-200 py-1 px-3"
          >
            <option value="0">Select..</option>
            <option value="1">{gender === "male" ? "King" : "Queen"}</option>
            <option value="2">{gender === "male" ? "Prince" : "Princess"}</option>
          </select>
        </div>
        <div className="col-start-1 col-span-2 row-span-5">
           <label htmlFor="" className="font-bold">
           Description
          </label>
          <CommentEditing  ref={editorRef} description={description}  onChange={(value) => setValue("description", value)} />
          <input
            type="hidden"
            {...register("description", { required: "description is required" })}
            value={description}
          />
          {errors.description && (
            <span className="text-red-500 text-xs">{errors.description.message}</span>
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