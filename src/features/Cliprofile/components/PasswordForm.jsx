"use client"
import React from "react";
import useChangePassword from "../hooks/useChangePassword";

const PasswordForm = () => {
  const {
    handleChangePassword,
    register,
    handleSubmit,
    isSubmitting,
    errors,
    reset,
  } = useChangePassword();

  return (
    <form onSubmit={handleSubmit(handleChangePassword)}>
      <div className="grid grid-cols-3">
        <div className="col-span-1">

          {/* Old Password */}
          <div className="mb-5">
            <label
              className={`block mb-2 text-sm font-medium ${
                errors.old_password ? "text-red-500" : "text-stone-900"
              }`}
            >
              အဟောင်း စကားဝှက် <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              placeholder="••••••••"
              {...register("old_password", { required: true })}
              className={`bg-stone-50 w-[300px] border ${
                errors.old_password
                  ? "border-red-500 focus:border-red-500"
                  : "border-stone-300 focus:border-blue-500"
              } text-sm block p-2.5`}
            />
            {errors.old_password && (
              <p className="text-red-500 text-sm mt-1">
                အဟောင်း စကားဝှက်ဖြည့်ရန် လိုအပ်ပါသည်
              </p>
            )}
          </div>

          {/* New Password */}
          <div className="mb-5">
            <label
              className={`block mb-2 text-sm font-medium ${
                errors.new_password ? "text-red-500" : "text-stone-900"
              }`}
            >
              စကားဝှက်အသစ် <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              placeholder="••••••••"
              {...register("voter_password", { required: true })}
              className={`bg-stone-50 w-[300px] border ${
                errors.new_password
                  ? "border-red-500 focus:border-red-500"
                  : "border-stone-300 focus:border-blue-500"
              } text-sm block p-2.5`}
            />
            {errors.new_password && (
              <p className="text-red-500 text-sm mt-1">
                စကားဝှက်အသစ် ဖြည့်ရန် လိုအပ်ပါသည်
              </p>
            )}
          </div>

          {/* Confirm Password */}
          <div className="mb-5">
            <label
              className={`block mb-2 text-sm font-medium ${
                errors.new_password_confirmation
                  ? "text-red-500"
                  : "text-stone-900"
              }`}
            >
              စကားဝှက်သစ် အတည်ပြုရန် <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              placeholder="••••••••"
              {...register("voter_password_confirmation", { required: true })}
              className={`bg-stone-50 w-[300px] border ${
                errors.new_password_confirmation
                  ? "border-red-500 focus:border-red-500"
                  : "border-stone-300 focus:border-blue-500"
              } text-sm block p-2.5`}
            />
            {errors.new_password_confirmation && (
              <p className="text-red-500 text-sm mt-1">
                စကားဝှက်အတည်ပြုခြင်း လိုအပ်ပါသည်
              </p>
            )}
          </div>

          {/* Checkbox */}
          <div className="mb-4">
            <label className="flex items-center text-sm">
              <input
                type="checkbox"
                {...register("correct")}
                className="w-4 h-4 border-stone-500 mr-2"
              />
              စကားဝှက်ပြောင်းလိုသည်ကို သေချာပါသည်။
            </label>
          </div>

          {/* Buttons */}
          <button
            type="button"
            className="py-2.5 px-5 mr-2 text-sm border"
          >
            ပယ်ဖျက်မည်
          </button>
          <button
            type="submit"
            disabled={isSubmitting}
            className="py-2.5 px-5 text-sm bg-blue-500 text-white"
          >
            စကားဝှက်ပြောင်းမည်
          </button>
        </div>
      </div>
    </form>
  );
};

export default PasswordForm;
