"use client";
import ButtonSpinner from '@/components/ButtonSpinner';
import { Checkbox } from '@/components/ui/checkbox';
import Link from 'next/link'
import React from 'react'

const LoginForm = ({handleLogin, handleSubmit, isSubmitting, register, errors}) => {
  console.log(errors);
  return (
    <form
      className="space-y-4 md:space-y-6"
      onSubmit={handleSubmit(handleLogin)}
    >
      <div>
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-stone-900 dark:text-white"
        >
          Your email
        </label>
        <input
          type="email"
          autoComplete="email"
          id="email"
          name="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address"
            }
          })}
          className={`bg-stone-50 border outline-0 border-stone-300 text-stone-900 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-stone-700 dark:border-stone-600 dark:placeholder-stone-400 dark:text-white dark:focus:ring-pink-500 dark:focus:border-pink-500 ${
            errors.email ? "border-red-500 dark:border-red-400" : ""
          }`}
          placeholder="name@company.com"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600 dark:text-red-400">
            {errors.email.message}
          </p>
        )}
      </div>
      <div>
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-stone-900 dark:text-white"
        >
          Password
        </label>
        <input
          type="password"
          {
            ...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters"
              }
            })
          }
          id="password"
          name="password"
          autoComplete="current-password"
          placeholder="••••••••"
          className={`bg-stone-50 border border-stone-300 text-stone-900 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-stone-700 dark:border-stone-600 outline-0 dark:placeholder-stone-400 dark:text-white dark:focus:ring-pink-500 dark:focus:border-pink-500 ${
            errors.password ? "border-red-500 dark:border-red-400" : ""
          }`}
        />
        {errors.password && (
          <p className="mt-1 text-sm text-red-600 dark:text-red-400">
            {errors.password.message}
          </p>
        )}
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-start">
          <div className="flex items-center">
           <Checkbox
          className="data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white dark:data-[state=checked]:border-blue-700 dark:data-[state=checked]:bg-blue-700"
           />
            <label
              htmlFor="remember-me"
              className="ms-2 text-sm font-medium text-stone-900 dark:text-stone-300"
            >
              Remember Me
            </label>
          </div>
        </div>
        <a
          href="#"
          className="text-sm font-medium text-blue-500 hover:underline dark:text-blue-500"
        >
          Forgot password?
        </a>
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full text-white flex disabled:pointer-events-none disabled:opacity-80 justify-center items-center gap-3 bg-blue-500 hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium text-sm px-5 py-2.5 text-center dark:bg-pink-400 dark:hover:bg-pink-500 dark:focus:ring-pink-600"
      >
        Sign in
        {isSubmitting && <ButtonSpinner />}
      </button>
      {errors.root && (
        <p className="text-sm text-red-600 dark:text-red-400">
          {errors.root.message}
        </p>
      )}
      <p className="text-sm font-light text-stone-500 dark:text-stone-400">
        Don't have an account yet?{" "}
        <Link
          href="/"
          className="font-medium text-blue-500 hover:underline dark:text-blue-500"
        >
          Sign up
        </Link>
      </p>
    </form>
  )
}

export default LoginForm