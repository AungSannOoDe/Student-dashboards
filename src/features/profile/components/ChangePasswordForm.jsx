"use client";
import React from 'react'
import useChangePassword from "../hooks/useChangePassword";
import ButtonSpinner from "../../../components/ButtonSpinner";
import { useRouter } from "next/navigation";

const ChangePasswordForm = () => {
   const {
    handleChangePassword,
    register,
    handleSubmit,
    isSubmitting,
    errors,
    reset,
  } = useChangePassword();
  const router = useRouter();
  return (
  <form onSubmit={handleSubmit(handleChangePassword)}>
    <div className=" grid grid-cols-3">
      <div className=" col-span-1">
        <div className="mb-5">
          <label
            htmlFor="first_name"
            className={`block mb-2 text-sm font-medium ${
              errors.old_password ? "text-red-500" : "text-stone-900"
            } dark:text-white`}
          >
            Old Password <span className=" text-red-500">*</span>
          </label>

          <input
            type="password"
            id="old-password"
            placeholder="••••••••"
            {...register("old_password", {
              required: true,
            })}
            autoComplete="current-password"
            className={`bg-stone-50 w-[300px] border ${
              errors.old_password
                ? "border-red-500 outline-0 focus:ring-red-500 focus:border-red-500"
                : "border-stone-300 focus:ring-blue-500 outline-0 focus:border-pink-500"
            } text-stone-900 text-sm   block w-full p-2.5 dark:bg-stone-700 dark:border-stone-600 dark:placeholder-stone-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-pink-500`}
          />
          {errors.old_password?.type === "required" && (
            <p className=" text-red-500 text-sm mt-1">
              Old Password is required
            </p>
          )}
        </div>
        <div className="mb-5">
          <label
            htmlFor="first_name"
            className={`block mb-2 text-sm font-medium ${
              errors.new_password ? "text-red-500" : "text-stone-900"
            } dark:text-white`}
          >
            New Password <span className=" text-red-500">*</span>
          </label>
          <input
            type="password"
            id="new-password"
            placeholder="••••••••"
            {...register("new_password", {
              required: true,
            })}
            className={`bg-stone-50 w-[300px] border ${
              errors.new_password
                ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                : "border-stone-300 focus:ring-blue-500 focus:border-pink-500"
            } text-stone-900 text-sm   block w-full p-2.5 dark:bg-stone-700 dark:border-stone-600 dark:placeholder-stone-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-pink-500`}
          />
          {errors.new_password?.type === "required" && (
            <p className=" text-red-500 text-sm mt-1">
              New Password is required
            </p>
          )}
        </div>
        <div className="mb-5">
          <label
            htmlFor="first_name"
            className={`block mb-2 text-sm font-medium ${
              errors.new_password_confirmation
                ? "text-red-500"
                : "text-stone-900"
            } dark:text-white`}
          >
            Comfirm Password
            <span className=" text-red-500">*</span>
          </label>
          <input
            id="confirm-password"
            placeholder="••••••••"
            type="password"
            {...register("new_password_confirmation", {
              required: true,
            })}
            className={`bg-stone-50 w-[300px] border ${
              errors.new_password_confirmation
                ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                : "border-stone-300 focus:ring-blue-500 focus:border-pink-500"
            } text-stone-900 text-sm   block w-full p-2.5 dark:bg-stone-700 dark:border-stone-600 dark:placeholder-stone-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-pink-500`}
          />
          {errors.new_password_confirmation?.type === "required" && (
            <p className=" text-red-500 text-sm mt-1">
              Comfirm Password is required
            </p>
          )}
        </div>
        <div className=" col-span-full">
          <div className="flex items-center mb-4">
            <input
              {...register("all_correct")}
              required
              id="all-correct"
              type="checkbox"
              value=""
              className="w-4 h-4 text-pink-600 bg-stone-100 border-stone-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-stone-800 focus:ring-2 dark:bg-stone-700 dark:border-stone-600"
            />
            <label
              htmlFor="all-correct"
              className="ms-2 text-sm font-medium text-stone-900 dark:text-stone-300"
            >
              I'm sure to update password.
            </label>
          </div>
        </div>

        <button
          type="button"
          onClick={() => router.push("/dashboard/user-profile")}
          className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-stone-900 focus:outline-none bg-white  border border-stone-200 hover:bg-stone-100 hover:text-pink-700 focus:z-10 focus:ring-4 focus:ring-stone-100 dark:focus:ring-stone-700 dark:bg-stone-800 dark:text-stone-400 dark:border-stone-600 dark:hover:text-white dark:hover:bg-stone-700"
        >
          Cancel
        </button>

        <button
          type="submit"
          disabled={isSubmitting}
          className="text-white  disabled:pointer-events-none disabled:opacity-80 inline-flex items-center justify-center gap-3 hover:opacity-90 bg-blue-500 font-medium  text-sm w-full sm:w-auto px-5 py-2.5"
        >
          <span>Change Password</span>
          {isSubmitting && <ButtonSpinner />}
        </button>
      </div>
    </div>
  </form>
  )
}

export default ChangePasswordForm