"use client";
import LoginButton from '@/components/LoginButton';
import { loginVoters } from '@/services/users';
import useAccountStore from '@/stores/useAccountStore';
import Link from 'next/link';
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
                throw new Error(json.message || "Undefined Error")
            }
            setToken(json.token)
            setAccount(json.data)
            setPart(2)
            router.push(`/clients/home`)
            toast.success("Login Successfully") // Changed from error to success
        }catch(error){
            toast.error(error.message) 
        }
    }
    
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-stone-900 dark:to-stone-800">
        {/* Background Shapes - Responsive */}
        <div className="w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] bg-blue-400/30 dark:bg-blue-600/20 rounded-r-full rounded-b-full absolute -top-20 -right-20 md:-top-30 md:-right-30 lg:-top-40 lg:-right-40"></div>
        
        <div className="w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] bg-blue-400/40 dark:bg-blue-500/30 rounded-full absolute top-[80px] sm:top-[100px] left-[30px] sm:left-[100px]"></div>
        
        <div className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] bg-blue-500/50 dark:bg-blue-600/40 rounded-full absolute top-[120px] sm:top-[160px] left-[50px] sm:left-[140px] shadow-xl"></div>

        {/* Main Content */}
        <div className="flex justify-center items-center min-h-screen px-4 sm:px-6 lg:px-8 py-8">
            <div className="w-full max-w-md lg:max-w-lg xl:max-w-xl z-40">
                <div className="bg-white/90 dark:bg-stone-900/90 backdrop-blur-sm px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10 rounded-2xl shadow-2xl border border-white/20">
                  <p> Go to <Link href="/" className='text-blue-400 hover:underline
                  '>Home Page</Link> </p>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8 text-stone-800 dark:text-white">
                        Login Form
                    </h1>
                    <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <label htmlFor="voter_email" className="block text-sm sm:text-base font-semibold mb-2 text-stone-700 dark:text-stone-300">
                                Email
                            </label>
                            <input 
                                type="email" 
                                id="voter_email"
                                name='voter_email' 
                                {...register("voter_email",{
                                    required:"Email is required",
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@gmail\.com$/i,
                                        message: "Must be a Gmail address",
                                    }
                                })} 
                                placeholder="Enter your email..." 
                                className="w-full p-3 sm:p-4 border border-stone-300 dark:border-stone-600 rounded-lg bg-white dark:bg-stone-800 text-stone-900 dark:text-white placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                            />
                            {errors.voter_email && (
                                <span className='text-red-500 text-xs sm:text-sm mt-1 block'>
                                    {errors.voter_email.message}
                                </span>
                            )}
                        </div>
                        
                        <div>
                            <label htmlFor="voter_password" className="block text-sm sm:text-base font-semibold mb-2 text-stone-700 dark:text-stone-300">
                                Password
                            </label>
                            <input 
                                type="password" 
                                id="voter_password"
                                name='voter_password' 
                                {...register("voter_password",{
                                    required: "Password is required",
                                    minLength: {
                                        value: 6,
                                        message: "Password must be at least 6 characters",
                                    },
                                    pattern:{
                                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/,
                                        message: "Password must contain at least one uppercase letter, one lowercase letter, one number and one special character",
                                    }
                                })} 
                                placeholder="Enter your password..." 
                                className="w-full p-3 sm:p-4 border border-stone-300 dark:border-stone-600 rounded-lg bg-white dark:bg-stone-800 text-stone-900 dark:text-white placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                            />
                            {errors.voter_password && (
                                <span className='text-red-500 text-xs sm:text-sm mt-1 block'>
                                    {errors.voter_password.message}
                                </span>
                            )}
                        </div>
                        
                        <div className="text-center pt-2">
                            <label className="text-xs sm:text-sm font-light text-stone-600 dark:text-stone-400">
                                If you don't have an account, please{" "}
                                <LoginButton className="font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 hover:underline !px-0 !py-0 !bg-transparent transition-colors duration-200">
                                    sign up
                                </LoginButton>
                            </label>
                        </div>
                        
                        <button 
                            type="submit" 
                            disabled={isSubmitting}
                            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold py-3 sm:py-4 px-4 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? "Logging in..." : "Login"}
                        </button>
                    </form>
                </div>
            </div>
        </div>

        {/* Bottom Background Shape - Responsive */}
        <div className="w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] bg-blue-500/30 dark:bg-blue-600/20 rounded-b-full rounded-t-full rounded-l-full absolute -bottom-20 -left-20 md:-bottom-30 md:-left-30 lg:-bottom-40 lg:-left-40"></div>
    </section>
  )
}

export default LoginSection