"use client";
import LoginButton from '@/components/LoginButton';
import { loginVoters } from '@/services/users';
import useAccountStore from '@/stores/useAccountStore';
import { useRouter } from 'next/navigation';
import React from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner';

const LoginSection = () => {
    const{register,reset,formState:{
        isSubmitting,errors
    },handleSubmit}=useForm();
    const{setAccount,setToken,setPart}=useAccountStore();
    const router=useRouter();
    const onSubmit=async(data)=>{
try{
    const res=await loginVoters(data)
    const json=await res.json()
    if(!res.ok){
        throw  new  Error(json.message || "Undefined  Error")
    }
    setToken(json.token)
    setAccount(json.data)
    setPart(2)
    router.push(`/clients/home`)
    toast.error("Login Successfully")
}catch(error){
    toast.error(error.message) 
}
    }
  return (
    <section className="relative h-screen overflow-hidden ">
    <div className="w-[500px] h-[500px] bg-blue-400  rounded-r-full  rounded-b-full  absolute top-0 -translate-y-30 leading-[0] rotate-y-180  right-0"></div>
    <div className="w-[80px] h-[80px] bg-blue-400 rounded-full top-[100px] absolute left-[100px] "></div>
    <div className="w-[50px] h-[50px] bg-blue-500 rounded-full top-[160px] absolute left-[140px] shadow-2xl "></div>
    <div className="flex justify-center items-center h-full">
        <div className="z-40 w-1/2">
        <div className="bg-slate-50 px-6 py-4 rounded-2xl   ">
                <h1 className="text-2xl font-bold text-center mb-4">Login Form</h1>
                <form className=" p-6 space-y-3" onSubmit={handleSubmit(onSubmit)}>
                    <div className="">
                        <label htmlFor="" className="font-bold">Email</label>
                         <input type="email"  name='voter_email' {...register("voter_email",{
                            required:"email is required",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@gmail\.com$/i,
                                message: "Must be a Gmail address",
                              }
                         }) }  placeholder="Enter  email..." className="w-full p-2 border rounded" />
                        {
                            errors.voter_email && <span className='text-red-400 text-xs'>{errors.voter_email.message}</span>
                         }
                    </div>
                   <div className="">
                    <label htmlFor="" className="font-bold">password</label>
                    <input type="password"   name='voter_password' {...register("voter_password",{
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters",
                      },
                      pattern:{
                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/,
                        message: "Password must contain at least one uppercase letter, one lowercase letter, and one number and one special character",
                      }
                    })}  placeholder="Enter password..." className="w-full p-2 border rounded" />
                    {errors.voter_password && 
                    <span className='text-red-400 text-xs'>{errors.voter_password.message}</span>
                    }
                   </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="terms"
                        className="font-light text-stone-500 dark:text-stone-300"
                      >
                        If u do not have account Please {" "}
                        <LoginButton className="font-medium  !text-stone-600 hover:underline dark:text-blue-500 !px-0  !py-0  !bg-transparent  ">
                        sign up
                        </LoginButton>
                      </label>
                    </div>
                    <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">{isSubmitting ? "longing...":"login"
                        } </button>
                </form>
            </div>
        </div>
    </div>

    <div className="w-[500px] h-[500px] bg-blue-500  rounded-b-full  rounded-t-full rounded-l-full  translate-y-30  absolute top-[300px]    left-0"></div>
</section>
  )
}

export default LoginSection