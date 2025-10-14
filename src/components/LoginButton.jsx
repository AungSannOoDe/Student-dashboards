"use client";
import React from 'react'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { useForm } from 'react-hook-form'
import { login } from '@/services/token';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import useAccountStore from '@/stores/useAccountStore';

const LoginButton = ({className}) => {
  const{handleSubmit,register,reset,formState:{
    errors,isSubmitting
  }}=useForm();
  const{setSpecifyId}=useAccountStore()
  const router=useRouter()
  const OnSubmit=async(data)=>{
   try{
   const  res=await login(data)
   const json=await res.json()
   if(!res.ok){
    throw new Error(json.message||"Undefined Error")
   }
     toast.success("You can register now")
      setSpecifyId(json?.data?.id)
     reset()
     router.push("/clients/register")

   }
   catch(error){
toast.error(error.message)
   }
  }
  return (
 <AlertDialog>
  <AlertDialogTrigger asChild>
    <button className={`bg-blue-500 text-white py-2 px-3 rounded-lg ${className}`}>အကောင့်ဖွင့်ရန်</button>
  </AlertDialogTrigger>
  <AlertDialogContent className={`bg-white`}>
    <AlertDialogHeader>
      <AlertDialogTitle>Tokens to the Account</AlertDialogTitle>
      <AlertDialogDescription>
       you need to enter the tokens that you received from the admin.
      </AlertDialogDescription>
    </AlertDialogHeader>
     <form action="" onSubmit={handleSubmit(OnSubmit)}>
      <div className="grid gap-4 py-2">
        <label htmlFor="tokens" className="text-sm font-medium">Tokens</label>
        <input
          type="text"
          id="tokens"
          name="tokens"
          {...register("token_name",{
            required:"token name  is required"
          })}
          className="border rounded-md p-2 w-full"
          placeholder="Enter your tokens"
        />
        {
          errors.token_name && <span  className='text-xs -translate-3 ml-5 text-red-600'>{errors.token_name.message}</span>
        }
        
      </div>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction type="submit">{isSubmitting?"Submitting...":"Continue"}</AlertDialogAction>
      </AlertDialogFooter>
     </form>
  </AlertDialogContent>
</AlertDialog>
  )
}

export default LoginButton