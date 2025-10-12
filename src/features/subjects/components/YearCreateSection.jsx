"use client"
import { fetchyear, storesubject, yearApiUrl } from '@/services/subject'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import useSWR from 'swr'
import { useTranslations } from 'next-intl'

const YearCreateSection = () => {
    const { register, reset, formState: { errors, isSubmitting }, handleSubmit } = useForm()
    const { data: years, isLoading } = useSWR(`${yearApiUrl}`, fetchyear)
    const router = useRouter()
    const t = useTranslations('YearCreateForm')
   
    const onSubmit = async(formData) => {
        try {
            const res = await storesubject(formData)
            const json = await res.json()
            if (!res.ok) {
                throw new Error(`${json.message}` || "Undefined Error")
            }
            reset()
            router.push('/dashboard/subjects')
        } catch (error) {
            toast.error(`${error.message}`)
        }
    }

    const handleCancel = () => {
        reset() 
    }

    // Simple spinner component
    const ButtonSpinner = () => (
        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
    )

    return (
        <>
            <p className='text-5xl mb-6'>{t('title')}</p>
            
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="w-full grid grid-cols-3 gap-x-5 gap-y-3">
                    <div className="col-span-1">
                        <div className="mb-5">
                            <label
                                htmlFor="year_name"
                                className={`block mb-2 text-sm font-medium ${
                                    errors.sub_name ? "text-red-500" : "text-stone-900"
                                } dark:text-white`}
                            >
                                {t('subjectName')}<span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                id="sub_name"
                                {...register("sub_name", {
                                    required: t('subjectNameRequired'),
                                })}
                                placeholder={t('subjectNamePlaceholder')}
                                className={`bg-stone-50 w-[300px] border ${
                                    errors.sub_name
                                        ? "border-red-500 outline-0 focus:ring-red-500 focus:border-red-500"
                                        : "border-stone-300 outline-0 focus:ring-blue-500 focus:border-blue-500"
                                } text-stone-900 text-sm block w-full p-2.5 dark:bg-stone-700 dark:border-stone-600 dark:placeholder-stone-400 dark:text-white dark:focus:ring-pink-500 dark:focus:border-pink-500`}
                            />
                            {errors.sub_name && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.sub_name.message}
                                </p>
                            )}
                        </div>

                        <div className="mb-5">
                            <label
                                htmlFor="images"
                                className={`block mb-2 text-sm font-medium ${
                                    errors.images ? "text-red-500" : "text-stone-900"
                                } dark:text-white`}
                            >
                                {t('image')}<span className="text-red-500">*</span>
                            </label>
                            <input
                                type="file"
                                id="images"
                                {...register("images", {
                                    required: t('imageRequired'),
                                    validate: {
                                        lessThan10MB: files => files[0]?.size < 10000000 || "Max 10MB",
                                        acceptedFormats: files => 
                                            ['image/jpeg', 'image/png', 'image/gif'].includes(files[0]?.type) || 
                                            "Only JPEG, PNG & GIF"
                                    }
                                })}
                                className={`bg-stone-50 w-[300px] border ${
                                    errors.images
                                        ? "border-red-500 outline-0 focus:ring-red-500 focus:border-red-500"
                                        : "border-stone-300 outline-0 focus:ring-blue-500 focus:border-blue-500"
                                } text-stone-900 text-sm block w-full p-2.5 dark:bg-stone-700 dark:border-stone-600 dark:placeholder-stone-400 dark:text-white dark:focus:ring-pink-500 dark:focus:border-pink-500`}
                            />
                            {errors.images && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.images.message}
                                </p>
                            )}
                        </div>

                        {/* Year Selection Dropdown */}
                        <div className="mb-5">
                            <label
                                htmlFor="year_id"
                                className={`block mb-2 text-sm font-medium ${
                                    errors.year_id ? "text-red-500" : "text-stone-900"
                                } dark:text-white`}
                            >
                                {t('selectYear')}<span className="text-red-500">*</span>
                            </label>
                            {isLoading ? (
                                <div className="text-stone-500">{t('loadingYears')}</div>
                            ) : (
                                <select 
                                    id="year_id"
                                    {...register('year_id', {
                                        required: t('selectYearRequired')
                                    })}
                                    className={`bg-stone-50 w-[300px] border ${
                                        errors.year_id
                                            ? "border-red-500 outline-0 focus:ring-red-500 focus:border-red-500"
                                            : "border-stone-300 outline-0 focus:ring-blue-500 focus:border-blue-500"
                                    } text-stone-900 text-sm block w-full p-2.5 dark:bg-stone-700 dark:border-stone-600 dark:text-white`}
                                >
                                    <option value="">{t('selectYear')}</option>
                                    {years && years.data.length > 0 ? (
                                        years.data.map((year) => (
                                            <option key={year.id} value={year.id}>
                                                {year.year_name}
                                            </option>
                                        ))
                                    ) : (
                                        <option value="" disabled>{t('noYearsAvailable')}</option>
                                    )}
                                </select>
                            )}
                            {errors.year_id && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.year_id.message}
                                </p>
                            )}
                        </div>

                        <div className="mb-5">
                            <label
                                htmlFor="description"
                                className={`block mb-2 text-sm font-medium ${
                                    errors.description ? "text-red-500" : "text-stone-900"
                                } dark:text-white`}
                            >
                                {t('description')}<span className="text-red-500">*</span>
                            </label>
                            <textarea
                                id="description"
                                {...register('description', {
                                    required: t('descriptionRequired'),
                                    minLength: {
                                        value: 10,
                                        message: t('descriptionMinLength')
                                    }
                                })}
                                placeholder={t('descriptionPlaceholder')}
                                rows={4}
                                className={`bg-stone-50 w-[300px] border ${
                                    errors.description
                                        ? "border-red-500 outline-0 focus:ring-red-500 focus:border-red-500"
                                        : "border-stone-300 outline-0 focus:ring-blue-500 focus:border-blue-500"
                                } text-stone-900 text-sm block w-full p-2.5 dark:bg-stone-700 dark:border-stone-600 dark:placeholder-stone-400 dark:text-white dark:focus:ring-pink-500 dark:focus:border-pink-500`}
                            ></textarea>
                            {errors.description && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.description.message}
                                </p>
                            )}
                        </div>

                        <div className="col-span-full">
                            <div className="flex items-center mb-4">
                                <input
                                    {...register("all_correct", {
                                        required: t('confirmRequired')
                                    })}
                                    id="all-correct"
                                    type="checkbox"
                                    className="w-4 h-4 cursor-pointer text-pink-600 bg-stone-100 border-stone-300 focus:ring-pink-500"
                                />
                                <label
                                    htmlFor="all-correct"
                                    className="ml-2 text-sm cursor-pointer font-medium text-stone-900"
                                >
                                    {t('confirmFields')}
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
                                onClick={handleCancel}
                                className="py-2.5 px-5 text-sm font-medium text-stone-900 focus:outline-none bg-white border border-stone-200 hover:bg-stone-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-stone-100 dark:focus:ring-stone-700 dark:bg-stone-800 dark:text-stone-400 dark:border-stone-600 dark:hover:text-white dark:hover:bg-stone-700"
                            >
                                {t('cancel')}
                            </button>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="text-white disabled:pointer-events-none disabled:opacity-80 inline-flex items-center justify-center gap-3 hover:bg-blue-400 bg-blue-600 font-medium text-sm px-5 py-2.5"
                            >
                                <span>{t('createSubject')}</span>
                                {isSubmitting && <ButtonSpinner />}
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}

export default YearCreateSection