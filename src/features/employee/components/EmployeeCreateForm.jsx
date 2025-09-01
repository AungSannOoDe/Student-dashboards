"use client"
import React from 'react'
import { useForm } from 'react-hook-form';

const EmployeeCreateForm = () => {
    const {
        register,
        reset,
        setValue,
        formState: { isSubmitting, errors },
        handleSubmit,
      } = useForm();
  return (
    <form  >
        <div className="grid grid-cols-2 space-y-7">
            <div className="col-start-1">
              <label htmlFor="" className="block">
                 Name
              </label>
              <input
                type="text"
                className="block border w-full border-stone-200 py-1 px-3"
                {...register("name",{
                    required:"name is  required",
                    min:{
                        value:2,
                        message:"name is at least 2"
                    }
                })}
              />
                 {errors.name && (
                    <span className="text-red-500 text-xs">{errors.name.message}</span>
                  )}
            </div>
            <div className="">
              <label htmlFor="" className="block">
                 email
              </label>
              <input
                type="text"
                {...register("email",{
                     required:"email  is required",
                     pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Enter a valid email address",
                      },
                })}
                className="block border w-full border-stone-200 py-1 px-3"
              />
                 {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                  )}
            </div>
            <div className="col-start-1">
              <label htmlFor="" className="block">
                 password
              </label>
              <input
                    type="password"
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 8,
                        message: "Password must be at least 8 characters",
                      },
                      pattern: {
                        value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                        message:
                          "Password must include uppercase, lowercase, number, and special character",
                      },
                    })}
                    className="block border w-full border-stone-200 py-1 px-3"
                  />
                  {errors.password && (
                    <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
                  )}
            </div>
            <div className="col-start-1">
              <label htmlFor="" className="block">
                 Role
              </label>
             <select name="" id="" className="block w-full border border-stone-200 py-1 px-3">
                <option value="admin">Admin</option>
                <option value="volunteers">volunteers</option>
             </select>
                 {/* {errors.name && (
                    <span className="text-red-500 text-xs">{errors.name.message}</span>
                  )} */}
            </div>
            <div className="col-start-1">
                <button type='submit' className='w-full py-2 text-white bg-blue-500 hover:bg-blue-600 duration-200'>{
                    isSubmitting ? "creating...":"create"
}</button>
            </div>
        </div>
    </form>
  )
}

export default EmployeeCreateForm