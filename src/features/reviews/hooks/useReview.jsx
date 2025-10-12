import { storeReview } from '@/services/review';
import React from 'react'
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

const useReview = () => {
    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: { errors },
        reset
      } = useForm({
        defaultValues: {
          rating: 0,
          comments: '',
          email: ''
        }
      });
      const currentRating = watch('rating');
      const onSubmit =async (data) => {
          const reviewdata={
            "reviewer_name":data.name,
            "email":data.email,
            "message":data.comments,
            "rating":data.rating
          }
        const res=  await storeReview(reviewdata);
        const json=await res.json();
        if(!res.ok){
            toast.error(`${json.message}`|| "Something is wrong")
        }
        toast.success(`${json.message}`)
        reset();
      };
  return {
  register,
  watch,
  currentRating,
  onSubmit,
  handleSubmit,
  reset,
  setValue,
  errors
  }
}

export default useReview