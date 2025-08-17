"use client"
import { storeAblum } from '@/services/ablum'
import React from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

const AblumCreateForm = ({ electorId }) => {
  const { 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting }, 
    reset 
  } = useForm({
    defaultValues: {
      photo1: null,
      photo2: null,
      photo3: null,
      photo4: null
    }
  })

  const onSubmit = async (data) => {
    try {
      const res=await storeAblum(data,electorId)
      const json=await res.json()
      if(!res.ok){
        throw new  Error(json.message || "Undefined  error")
      }
     toast.success(json.message)
      reset()
    } catch (error) {
  toast.error(error.message)
      console.error('Error creating album:', error)
    }
  }
  const validateFile = (file) => {
    if (!file || file.length === 0) return 'Photo is required'
    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif']
    if (!allowedTypes.includes(file[0].type)) {
      return 'Only JPG, PNG, or GIF files are allowed'
    }
    if (file[0].size > 5 * 1024 * 1024) { 
      return 'File size must be less than 5MB'
    }
    return true
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}     >
      <div className="grid grid-cols-3 gap-10 grid-rows-3 gap-y-15">
        {/* Photo 1 */}
        <div className="space-y-2">
          <label htmlFor="photo1" className='block'>Photo 1 *</label>
          <input 
            id="photo1"
            type="file" 
            className='block border border-stone-200 py-1 px-3' 
            {...register('photo1', { 
                required:"photo1 is required",
                validate: (file) => file.length === 0 || validateFile(file)
            })}
          />
          {errors.photo1 && (
            <p className="text-red-500 text-sm mt-1">{errors.photo1.message}</p>
          )}
        </div>
        {/* Photo 2 */}
        <div className="space-y-2">
          <label htmlFor="photo2" className='block'>Photo 2 *</label>
          <input 
            id="photo2"
            type="file" 
            className='block border border-stone-200 py-1 px-3' 
            {...register('photo2', { 
                required:"photo2 is required",
                validate: (file) => file.length === 0 || validateFile(file)
            })}
          />
          {errors.photo2 && (
            <p className="text-red-500 text-sm mt-1">{errors.photo2.message}</p>
          )}
        </div>

        {/* Photo 3 */}
        <div className="space-y-2 col-start-1">
          <label htmlFor="photo3" className='block'>Photo 3 *</label>
          <input 
            id="photo3"
            type="file" 
            className='block border border-stone-200 py-1 px-3' 
            {...register('photo3', { 
                required:"photo3 is required",
                validate: (file) => file.length === 0 || validateFile(file)
            })}
          />
          {errors.photo3 && (
            <p className="text-red-500 text-sm mt-1">{errors.photo3.message}</p>
          )}
        </div>

        {/* Photo 4 */}
        <div className="space-y-2">
          <label htmlFor="photo4" className='block'>Photo 4</label>
          <input 
            id="photo4"
            type="file" 
            className='block border border-stone-200 py-1 px-3' 
            {...register('photo4', { 
                required:"photo4 is required",
              validate: (file) => file.length === 0 || validateFile(file)
            })}
          />
          {errors.photo4 && (
            <p className="text-red-500 text-sm mt-1">{errors.photo4.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="col-start-1 col-span-2 w-[105%]">
          <button 
            type="submit"
            disabled={isSubmitting}
            className='mt-10 bg-blue-600 w-full py-2 hover:opacity-90 duration-300 disabled:opacity-75 active:scale-95 text-white'
          >
            {isSubmitting ? 'Creating...' : 'Create Album'}
          </button>
        </div>
      </div>
    </form>
  )
}

export default AblumCreateForm