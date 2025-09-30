"use client";
import { storeUsers } from "@/services/users";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const EmployeeCreateForm = () => {
  const {
    register,
    reset,
    setValue,
    formState: { isSubmitting, errors },
    handleSubmit,
  } = useForm();
  const router=useRouter()

  // submit handler
  const onSubmit = async (data) => {
    try {
      const res=await storeUsers(data)
      const json=await res.json()
      if(!res.ok){
        throw new Error(`${json.message}`)
      }
  toast.success(json.message)
      reset(); 
      router.push(`/dashboard/employee`)
    } catch (err) {
      console.error("Error submitting form:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-2 space-y-7">
        {/* Name */}
        <div className="col-start-1">
          <label className="block">Name</label>
          <input
            type="text"
            className="block border w-full border-stone-200 py-1 px-3"
            {...register("name", {
              required: "Name is required",
              minLength: {
                value: 2,
                message: "Name must be at least 2 characters",
              },
            })}
          />
          {errors.name && (
            <span className="text-red-500 text-xs">{errors.name.message}</span>
          )}
        </div>

        {/* Email */}
        <div className="col-start-1">
          <label className="block">Email</label>
          <input
            type="text"
            className="block border w-full border-stone-200 py-1 px-3"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter a valid email address",
              },
            })}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Password */}
        <div className="col-start-1">
          <label className="block">Password</label>
          <input
            type="text"
            className="block border w-full border-stone-200 py-1 px-3"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
              pattern: {
                value:
                 /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/,
                message:
                  "Password must include uppercase, lowercase, number, and special character",
              },
            })}
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* Role */}
        <div className="col-start-1">
          <label className="block">Role</label>
          <select
            className="block w-full border border-stone-200 py-1 px-3"
            {...register("role", { required: "Role is required" })}
          >
            <option value="">Select Role</option>
            <option value="admin">Admin</option>
            <option value="volunteers">Volunteers</option>
          </select>
          {errors.role && (
            <p className="text-red-500 text-sm mt-1">{errors.role.message}</p>
          )}
        </div>

        {/* Submit button */}
        <div className="col-start-1">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-2 text-white bg-blue-500 hover:bg-blue-600 duration-200"
          >
            {isSubmitting ? "Creating..." : "Create"}
          </button>
        </div>
      </div>
    </form>
  );
};

export default EmployeeCreateForm;
