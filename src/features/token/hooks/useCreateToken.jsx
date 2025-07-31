import { useRouter } from 'next/navigation';
import { storeToken } from '@/services/token';
import {useState} from 'react'
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
const useCreateToken = () => {
const router = useRouter();
const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);
const { register, handleSubmit, formState: { isSubmitting }, reset } = useForm();
const onSubmit = async (data)=>{
  console.log(data);
    try{
       const res=await storeToken(data)
       const json=await res.json()
       if(!res.ok){
        throw new Error(json.message || "Something wrong")
       }
       reset();
       toast.success(`${json.message}`)
       router.push(`/dashboard/token`)
    }catch(error){
      toast.error(`${error.message}`)
      console.error(error.message)
    }
}
  return {
register,
isSubmitting,
error,
handleSubmit,
onSubmit
  }
}

export default useCreateToken