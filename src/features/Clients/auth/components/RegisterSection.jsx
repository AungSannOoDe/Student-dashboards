"use client";

import useRegister from "../hooks/useRegister";


const RegisterSection = () => {
const{isSubmitting,errors,onSubmit,register,reset,password,setError,handleSubmit}=useRegister();
  return (
    <section className="relative h-screen overflow-hidden ">
        <div className="w-[500px] h-[500px] bg-blue-400  rounded-r-full  rounded-b-full  absolute top-0 -translate-y-30 leading-[0] rotate-y-180  right-0"></div>
        <div className="w-[50px] h-[50px] bg-blue-400 rounded-full top-[100px] absolute left-[100px] "></div>
        <div className="flex justify-center items-center h-full   ">
        <div className="w-1/2 z-40">
            <div className="bg-slate-50 px-6 py-4 rounded-2xl">
                <h1 className="text-2xl font-bold text-center mb-4"> Student Register</h1>
                <form className=" p-6 space-y-3" onSubmit={handleSubmit(onSubmit)}>
                    <div className="">
                        <label htmlFor="" className="font-bold">Name</label>
                        <input type="text"  {...register("name",{
                          required:"User name is required",
                          minLength: {
                            value: 3,
                            message: "Name must be at least 3 characters",
                          }
                        })}  placeholder="Username" className="w-full p-2 border rounded" />
                        {
                          errors.name && <span className='text-red-400 text-xs'>{errors.name.message}</span>
                        }
                    </div>
                    <div className="">
                        <label htmlFor="" className="font-bold">Email</label>
                         <input type="email" {...register("email",{
                            required:"Email is required",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@gmail\.com$/i,
                                message: "Must be a Gmail address",
                              }
                         })} placeholder="Email" className="w-full p-2 border rounded" />
                         {
                            errors.email && <span className='text-red-400 text-xs'>{errors.email.message}</span>
                         }
                    </div>
                   <div className="">
                    <label htmlFor="" className="font-bold">password</label>
                    <input type="password" {...register("password",{
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters",
                      },
                      pattern:{
                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/,
                        message: "Password must contain at least one uppercase letter, one lowercase letter, and one number and one special character",
                      }
                    })} placeholder="Password" className="w-full p-2 border rounded" />
                    {errors.password && 
                    <span className='text-red-400 text-xs'>{errors.password.message}</span>
                    }
                   </div>
                   <div className="">
                    <label htmlFor="" className="font-bold">Confirmation password</label>
                     <input type="password" {...register("password_confirmation",{
                      required: "Confirmation password is required",
                      validate: (value) => value === password || "Passwords do not match"
                     })} placeholder="Confiramtion password" className="w-full p-2 border rounded" />
                     {
                        errors.password_confirmation && 
                        <span className='text-red-400 text-xs'>{errors.password_confirmation.message}</span>
                     }
                   </div>
                     <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="terms"
                          aria-describedby="terms"
                          type="checkbox"
                          className="w-4 h-4 border border-stone-300 bg-stone-50 focus:ring-3 focus:ring-pink-300 dark:bg-stone-700 dark:border-stone-600 dark:focus:ring-pink-600 dark:ring-offset-stone-800"
                          required
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label
                          htmlFor="terms"
                          className="font-light text-stone-500 dark:text-stone-300"
                        >
                          I accept the{" "}
                          <a
                            className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                            href="#"
                          >
                            Terms and Conditions
                          </a>
                        </label>
                      </div>
                    </div>
                    <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">{ isSubmitting ? "Registering":"Register"} </button>
                </form>
            </div>
        </div>
            
        </div>
        <div className="w-[500px] h-[500px] bg-blue-500  rounded-b-full  rounded-t-full rounded-l-full  translate-y-30  absolute top-[300px]    left-0"></div>
    </section>
  )
}

export default RegisterSection