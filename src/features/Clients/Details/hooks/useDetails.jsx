"use client";

import { electorDeailsApiUrl, fetchElectors } from '@/services/electors';
import { useParams } from 'next/navigation'
import useSWR, { useSWRConfig } from 'swr';
import { useForm } from 'react-hook-form';
import useAccountStore from '@/stores/useAccountStore';
import { fetchvote, storevote, voteapiUrl } from '@/services/votes';
import { toast } from 'sonner';
import { updateMale } from '@/services/voters';
const useDetails = () => {
    const{triggerVote}=useAccountStore();
    const {id}=useParams();
    const{mutate}=useSWRConfig();
    const  {data,isLoading,error}=useSWR(`${electorDeailsApiUrl}/${id}`,fetchElectors)
    const{account,token,setAccount, setVoteMale, VoteMale,VoteFemale}=useAccountStore()
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
        setAccount(json?.data.voter)
        triggerVote()
       setVoteMale(1)
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
  VoteFemale,
  onSubmit,
  handleSubmit,
  account,
  id,
   VoteMale,
  data,
 isLoading
 }
}

export default useDetails