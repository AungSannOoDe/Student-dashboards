"use client"
import { storeVoters } from '@/services/users';
import useAccountStore from '@/stores/useAccountStore';
import { useRouter } from 'next/navigation';
import React from 'react'
import { useForm, useWatch } from 'react-hook-form'
import { toast } from 'sonner';
const useRegister = () => {
 const {formState:{
    errors,isSubmitting,
},register,reset,handleSubmit,setError,control}=useForm();
const{SpecifyId,setSpecifyId,setToken,setAccount}=useAccountStore();
const password = useWatch({ control, name: "password" });
const router=useRouter();
 const onSubmit=async(data)=>{
  try{
    const res=await storeVoters({
     voter_name:data.name,
      voter_email:data.email,
      voter_password:data.password
    })
    const json=await res.json();
    if(!res.ok){
      throw new Error(json.message || "Undefined Error");
    }
    toast.success("You have registered successfully");
    reset();
     setSpecifyId({});
    setToken(json.token);
    setAccount({
        name:json.voters.voter_name,
        email:json.voters.voter_email,
        id:json.voters.id,
    })
    router.push("/clients/home");
  }
  catch(error){
    toast.error(error.message);
    console.error("Registration error:", error);
  }
}
  return{
onSubmit,
register,
errors,
isSubmitting,
reset,
handleSubmit,
setError,
control,
password
  }
}

export default useRegister