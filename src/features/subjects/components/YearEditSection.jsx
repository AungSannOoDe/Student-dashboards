"use client"
import ButtonSpinner from '@/components/ButtonSpinner';
import React from 'react'
import { useForm } from 'react-hook-form'
import useSWR from "swr";
import { useParams, useRouter } from "next/navigation";

import { toast } from 'sonner';
import { useTranslations } from 'next-intl';
import { fetchyear, yearApiUrl,yearUpdate } from '@/services/subject';

const YearEditSection = () => {
    const { id } = useParams();
    const { data: years, isLoading: yearsLoading } = useSWR(`${yearApiUrl}`, fetchyear)
    
    const { register, formState: { errors, isSubmitting }, handleSubmit, setValue } = useForm();
    const router = useRouter();

    // Find the specific year to edit
    const yearToEdit = years?.data?.find(year => year.id === parseInt(id));

    // Set form values when year data is available
    React.useEffect(() => {
        if (yearToEdit) {
            setValue('year_name', yearToEdit.year_name);
        }
    }, [yearToEdit, setValue]);

    const onSubmit = async (data) => {
        try {
            const res = await yearUpdate(data, id)
            const json = await res.json()
            if (!res.ok) {
                throw new Error(`${json.message}` || "Undefined Error")
            }
            toast.success(`${json.message}`)
            router.push('/dashboard/subjects')
        } catch (error) {
            toast.error(`${json.message}`)
        }
    }

    // Skeleton Loader Component
    const SkeletonLoader = () => (
        <div className="w-full grid grid-cols-3 gap-x-5 gap-y-3">
            <div className="col-span-1">
                {/* Year Name Skeleton */}
                <div className="mb-5">
                    <div className="h-4 bg-stone-200 rounded w-32 mb-2 dark:bg-stone-700"></div>
                    <div className="h-10 bg-stone-200 rounded w-[300px] dark:bg-stone-700"></div>
                </div>

                {/* Description Skeleton */}
                <div className="mb-5">
                    <div className="h-4 bg-stone-200 rounded w-20 mb-2 dark:bg-stone-700"></div>
                    <div className="h-32 bg-stone-200 rounded w-[300px] dark:bg-stone-700"></div>
                </div>

                {/* Checkbox Skeleton */}
                <div className="mb-5">
                    <div className="flex items-center mb-4">
                        <div className="h-4 w-4 bg-stone-200 rounded dark:bg-stone-700"></div>
                        <div className="h-4 bg-stone-200 rounded w-48 ml-2 dark:bg-stone-700"></div>
                    </div>
                </div>

                {/* Button Skeleton */}
                <div className="flex gap-3">
                    <div className="h-10 bg-stone-200 rounded w-24 dark:bg-stone-700"></div>
                    <div className="h-10 bg-stone-200 rounded w-32 dark:bg-stone-700"></div>
                </div>
            </div>
        </div>
    );

    // Show skeleton while loading
    if (yearsLoading) {
        return (
            <>
                <div className="h-8 bg-stone-200 rounded w-48 mb-6 dark:bg-stone-700"></div>
                <SkeletonLoader />
            </>
        );
    }

    // Show error if year not found
    if (!yearToEdit && !yearsLoading) {
        return (
            <div className="text-center py-8">
                <p className="text-red-500 text-lg">{t('yearNotFound')}</p>
                <button
                    onClick={() => router.back()}
                    className="mt-4 py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                    {t('goBack')}
                </button>
            </div>
        );
    }

    return (
        <>
            <p className='text-5xl mb-6'>title</p>
                    
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="w-full grid grid-cols-3 gap-x-5 gap-y-3">
                    <div className="col-span-1">
                        <div className="mb-5">
                            <label
                                htmlFor="year_name"
                                className={`block mb-2 text-sm font-medium ${
                                    errors.year_name ? "text-red-500" : "text-stone-900"
                                } dark:text-white`}
                            >
                            yearName<span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                id="year_name"
                                {...register("year_name", {
                                    required: 'yearNameRequired',
                                })}
                                placeholder='yearNamePlaceholder'
                                className={`bg-stone-50 w-[300px] border ${
                                    errors.year_name
                                        ? "border-red-500 outline-0 focus:ring-red-500 focus:border-red-500"
                                        : "border-stone-300 outline-0 focus:ring-blue-500 focus:border-blue-500"
                                } text-stone-900 text-sm block w-full p-2.5 dark:bg-stone-700 dark:border-stone-600 dark:placeholder-stone-400 dark:text-white dark:focus:ring-pink-500 dark:focus:border-pink-500`}
                            />
                            {errors.year_name && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.year_name.message}
                                </p>
                            )}
                        </div>
                        <div className="col-span-full">
                            <div className="flex items-center mb-4">
                                <input
                                    {...register("all_correct", {
                                        required:'confirmRequired'
                                    })}
                                    id="all-correct"
                                    type="checkbox"
                                    className="w-4 h-4 cursor-pointer text-pink-600 bg-stone-100 border-stone-300 focus:ring-pink-500"
                                />
                                <label
                                    htmlFor="all-correct"
                                    className="ml-2 text-sm cursor-pointer font-medium text-stone-900"
                                >
                                    confirmFields
                                </label>
                            </div>
                            {errors.all_correct && (
                                <p className="text-red-500 text-sm mt-1 mb-2">
                                    {errors.all_correct.message}
                                </p>
                            )}
                        </div>

                        <div className="flex gap-3">
                            <button
                                type="button"
                                onClick={() => router.back()}
                                className="py-2.5 px-5 text-sm font-medium text-stone-900 focus:outline-none bg-white border border-stone-200 hover:bg-stone-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-stone-100 dark:focus:ring-stone-700 dark:bg-stone-800 dark:text-stone-400 dark:border-stone-600 dark:hover:text-white dark:hover:bg-stone-700"
                            >
                                cancel
                            </button>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="text-white disabled:pointer-events-none disabled:opacity-80 inline-flex items-center justify-center gap-3 hover:bg-blue-400 bg-blue-600 font-medium text-sm px-5 py-2.5"
                            >
                                <span>updateYear</span>
                                {isSubmitting && <ButtonSpinner />}
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}

export default YearEditSection