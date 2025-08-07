"use client"
import React from 'react'
import { electorDeailsApiUrl, fetchElectors } from '@/services/electors';
import { useParams } from 'next/navigation'
import useSWR, { useSWRConfig } from 'swr';
import { useForm } from 'react-hook-form';
import useAccountStore from '@/stores/useAccountStore';
import { fetchvote, storevote, voteapiUrl } from '@/services/votes';
import { toast } from 'sonner';
const useDetails = () => {
    const{triggerVote}=useAccountStore();
    const {id}=useParams();
    const{mutate}=useSWRConfig();
    const  {data,isLoading,error}=useSWR(`${electorDeailsApiUrl}/${id}`,fetchElectors)
    const{account}=useAccountStore()
    const{handleSubmit,formState:{
      errors,isSubmitting
    },register,reset}=useForm();
    const onSubmit=async(data)=>{
        try{
          const res=await storevote({
           elector_id:data.elector_id,
           voter_id:data.voter_id,
           vote_code:`Vot-${Math.floor(Math.random()*(30001)+ 300)}`,
           archived_at:"1"
          })
          const json=await res.json()
          if(!res.ok){
           throw new Error(json.message|| "Undefined  Error")
          }
         toast.success(json.message)
        triggerVote()
      mutate(`${voteapiUrl}/${id}`,fetchvote)
        }
        catch(error){
          toast.error(error.message)
        }
      }
 return{
  register,
  isSubmitting,
  reset,
  onSubmit,
  handleSubmit,
  account,
  id,
  data,
 isLoading
 }
}

export default useDetails