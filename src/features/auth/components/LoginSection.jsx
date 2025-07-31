"use client";
import React from 'react'
import LoginForm from './LoginForm'
import useLogin from '../hooks/useLogin';

const LoginSection = () => {
  const { handleLogin, handleSubmit, register, isSubmitting,errors } = useLogin();
  return (
    <section className=' bg-stone-50  min-h-svh   w-full bg-[url("/images/cover.png")] bg-no-repeat bg-right   bg-[length:200px_auto] lg:bg-[length:300px_auto] ' >
         <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto min-h-svh lg:py-0">
            <div className="w-full bg-white  shadow-lg rounded-sm dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-stone-800 dark:border-stone-700">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <div className=" flex items-end gap-1 p-6 ">
                  <img src={`/images/Culogo-removebg-preview.png`} className=" h-16 -mt-1 -ms-10" alt="" />
                  <h1 className="text-xl self-center  font-bold leading-tight tracking-tight text-blue-500  md:text-3xl dark:text-white">
                    Dashboard login  Form
                  </h1>
                </div>
                <LoginForm handleLogin={handleLogin} errors={errors} handleSubmit={handleSubmit} isSubmitting={isSubmitting} register={register}/>
              </div>
            </div>
          </div>
    </section>
  )
}

export default LoginSection