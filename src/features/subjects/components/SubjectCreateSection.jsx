"use client"
import ButtonSpinner from '@/components/ButtonSpinner';
import React from 'react'
import { useForm } from 'react-hook-form'
import { useSWRConfig } from "swr";
import { useRouter } from "next/navigation";
import { storeyear } from '@/services/subject';
import { toast } from 'sonner';
import { useTranslations } from 'next-intl';

const SubjectCreateSection = () => {
  const { register, formState: { errors, isSubmitting }, handleSubmit, reset } = useForm();
  const router = useRouter();
  const t = useTranslations('SubjectCreateForm')

  const handleName = async (data) => {
    try {
      const res = await storeyear({
        "year_name": data.year_name
      });
      const json = await res.json();
      if (!res.ok) {
        throw new Error(json.message || "Undefined error");
      }
      toast.success("Year added Successfully");
      router.push("/dashboard/subjects");
      reset();
    } catch (error) {
      toast.error(error.message);
      console.error("Error:", error);
    }
  };

  const handleCancel = () => {
    router.push("/dashboard/subjects/create");
  };

  return (
    <>
      <p className='text-5xl'>{t('title')}</p>
      <form onSubmit={handleSubmit(handleName)}>
        <div className="w-full grid grid-cols-3 gap-x-5 gap-y-3">
          <div className=" col-span-1">
            <div className="mb-5 ">
              <label
                htmlFor="year_name"
                className={`block mb-2 text-sm font-medium ${
                  errors.year_name ? "text-red-500" : "text-stone-900"
                } dark:text-white`}
              >
                {t('name')}<span className=" text-red-500">*</span>
              </label>
              <input
                type="text"
                {...register("year_name", {
                  required: t('nameRequired'),
                })}
                placeholder={t('namePlaceholder')}
                className={`bg-stone-50 w-[300px] border ${
                  errors.year_name
                    ? "border-red-500 outline-0 focus:ring-red-500 focus:border-red-500"
                    : "border-stone-300 outline-0 focus:ring-blue-500 focus:border-blue-500"
                } text-stone-900 text-sm   block w-full p-2.5 dark:bg-stone-700 dark:border-stone-600 dark:placeholder-stone-400 dark:text-white dark:focus:ring-pink-500 dark:focus:border-pink-500`}
              />
              {errors.year_name?.type === "required" && (
                <p className=" text-red-500 text-sm mt-1">
                  {t('nameRequired')}
                </p>
              )}
            </div>
            <div className=" col-span-full">
              <div className="flex items-center mb-4 ">
                <input
                  {...register("all_correct")}
                  required
                  id="all-correct"
                  type="checkbox"
                  className="w-4 h-4 cursor-pointer text-pink-600 bg-stone-100 border-stone-300 focus:ring-pink-500"
                />
                <label
                  htmlFor="all-correct"
                  className="ml-2 text-sm cursor-pointer font-medium text-stone-900"
                >
                  {t('confirmField')}
                </label>
              </div>
            </div>
            <button
              type="button"
              onClick={handleCancel}
              className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-stone-900 focus:outline-none bg-white  border border-stone-200 hover:bg-stone-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-stone-100 dark:focus:ring-stone-700 dark:bg-stone-800 dark:text-stone-400 dark:border-stone-600 dark:hover:text-white dark:hover:bg-stone-700"
            >
              {t('cancel')}
            </button>

            <button
              type="submit"
              disabled={isSubmitting}
              className="text-white  disabled:pointer-events-none disabled:opacity-80 inline-flex items-center justify-center gap-3 hover:bg-blue-400 bg-blue-600 font-medium  text-sm w-full sm:w-auto px-5 py-2.5"
            >
              <span>{t('create')}</span>
              {isSubmitting && <ButtonSpinner />}
            </button>
          </div>
        </div>
      </form>
    </>
  )
}

export default SubjectCreateSection