"use client";
import Spinner from '@/components/Spinner';
import { useParams } from 'next/navigation'
import React from 'react'
import useEditToken from '../hooks/useEditToken';
import ButtonSpinner from '@/components/ButtonSpinner';
import { useTranslations } from 'next-intl';

const TokenEditSection = () => {
    const {
        data,
        register,
        handleSubmit,
        update,
        isSubmitting,
        isLoading,
        errors,
        router,
    } = useEditToken();
    
    const t = useTranslations('TokenEditSection');
    
    if (isLoading) return <Spinner />;
    
    return (
        <section className="w-full pl-6">
            <h1 className="text-3xl font-bold mb-3">{t('title')}</h1>
            <p className="mb-10 text-stone-500">
                {t('description')}
            </p>
            <form onSubmit={handleSubmit(update)}>
                <div className="w-full grid grid-cols-3 gap-x-5 gap-y-3">
                    <div className="col-span-1">
                        <div className="mb-5">
                            <label
                                htmlFor="first_name"
                                className={`block mb-2 text-sm font-medium ${
                                    errors.name ? "text-red-500" : "text-stone-900"
                                } dark:text-white`}
                            >
                                {t('fields.tokenName.label')} <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                defaultValue={data?.data?.token_name}
                                {...register("name", { required: true })}
                                className={`bg-stone-50 border ${
                                    errors.name
                                        ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                                        : "border-stone-300 focus:ring-pink-500 focus:border-pink-500"
                                } text-stone-900 text-sm block w-full p-2.5`}
                            />
                            {errors.name && (
                                <p className="text-red-500 text-sm mt-1">
                                    {t('fields.tokenName.error')}
                                </p>
                            )}
                        </div>
                        <div className="col-span-full">
                            <div className="flex items-center mb-4">
                                <input
                                    type="checkbox"
                                    {...register("all_correct")}
                                    required
                                    id="all-correct"
                                    className="w-4 h-4 cursor-pointer text-pink-600 bg-stone-100 border-stone-300 focus:ring-pink-500"
                                />
                                <label
                                    htmlFor="all-correct"
                                    className="ml-2 text-sm cursor-pointer font-medium text-stone-900"
                                >
                                    {t('confirmation.allCorrect')}
                                </label>
                            </div>
                        </div>
                        <div className="flex items-center mb-4">
                            <input
                                {...register("back_to_customer_list")}
                                id="back-to-Customer-list"
                                type="checkbox"
                                className="w-4 h-4 text-pink-600 bg-stone-100 border-stone-300 focus:ring-pink-500"
                            />
                            <label
                                htmlFor="back-to-Customer-list"
                                className="ml-2 text-sm font-medium text-stone-900"
                            >
                                {t('confirmation.backToList')}
                            </label>
                        </div>

                        <button
                            type="button"
                            onClick={() => router.back()}
                            className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-stone-900 bg-white border border-stone-200 hover:bg-stone-100 focus:z-10 focus:ring-4"
                        >
                            {t('buttons.cancel')}
                        </button>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="text-white bg-blue-600 disabled:pointer-events-none disabled:opacity-80 inline-flex items-center justify-center gap-3 hover:bg-blue-600 font-medium text-sm w-full sm:w-auto px-5 py-2.5"
                        >
                            <span>{t('buttons.update')}</span>
                            {isSubmitting && <ButtonSpinner />}
                        </button>
                    </div>
                </div>
            </form>
        </section>
    )
}

export default TokenEditSection;