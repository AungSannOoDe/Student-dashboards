"use  client"
import { updateGallery } from '@/services/gallery'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

const GalleryEditForm = ({gallery:{
    title,description,id,images
}}) => {
  const router=useRouter()
    const{setValue,register,handleSubmit,reset,formState:{
        errors,isSubmitting}}=useForm({
        defaultValues:{
            title,description,images
        }
    })
    const onSubmit=async(data)=>{
        try{
const res=await updateGallery(data,id)
const json=await res.json()
 if(!res.ok){
  throw new Error(`${json.message}`||"Undefined Error")
 }
toast.success("Gallery Update Successfully")
router.push(`/dashboard/gallery`)
        }
        catch(error){
toast.error(error.message)
        }
    }
  return (
<form action="" onSubmit={handleSubmit(onSubmit)}>
  <div className="grid grid-cols-2 space-y-4 ">
    <div className="">
      <label htmlFor="" className="block">
        Title
      </label>
      <input
        type="text"
        {...register("title", {
          required: "title is required",
        })}
        className="block border w-full border-stone-200 py-1 px-3"
        placeholder="Enter title..."
      />
      {errors.title && (
        <span className="text-red-500 text-xs">{errors.title.message}</span>
      )}
    </div>
    <div className="col-start-1">
      <label htmlFor="" className="block">
        Images
      </label>
      <input
        type="file"
        {...register("images")}
        className="block border w-full border-stone-200 py-1 px-3"
        placeholder="Enter title..."
      />
      {errors.images && (
        <span className="text-red-500 text-xs">
          {errors.images.message}
        </span>
      )}
    </div>
    <div className="col-start-1">
      <label htmlFor="" className="block">
        Description
      </label>
      <textarea
        name=""
        id=""
        {...register("description",{
            required:"Description is required"
        })}
        className="block border w-full border-stone-200 py-1 px-3"
      ></textarea>
         {errors.description && (
            <span className="text-red-500 text-xs">
              {errors.description.message}
            </span>
          )}
    </div>
    <div className="col-start-1">
      <button className="bg-blue-500 text-white text-lg w-full py-2">
          {
            isSubmitting ? "updating.." :"update"
          }  
      </button>
    </div>
  </div>
</form>
  )
}

export default GalleryEditForm