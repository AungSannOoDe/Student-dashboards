"use client";
import React ,{useState} from 'react'
import useCreateToken from '../hooks/useCreateToken';
import { useTranslations } from 'next-intl';
const TokenCreateSection = () => {
    const t = useTranslations('TokenCreateSection');
    const{isSubmitting,register,handleSubmit,error,onSubmit}=useCreateToken()
  return (
    <section  className="pl-6">
        <h1 className="font-bold text-3xl">{t('title')}</h1>
        <div className="">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block mb-2">{t('fields.tokenType')}</label>
                        <select
                          {...register('type')}
                          className="w-full p-2 border rounded"
                        >
                          <option value="">Random</option>
                          <option value='AOY'>AOY</option>
                          <option value='POT'>POT</option>
                          <option value='OPYT'>OPYT</option>
                          <option value="YPY">YPY</option>
                          <option value="CPC">CPC</option>
                          <option value="UgtOY">UgtOY</option>
                         
                        </select>
                      </div>
                      <div>
                        <label className="block mb-2">{t('fields.algorithm')}</label>
                        <select
                          {...register('algorithm')}
                          className="w-full p-2 border rounded"
                        >
                          <option value="sha256">Random</option>
                        </select>
                      </div>
                    </div>
              <input type="hidden" {...register("archived_at")}  defaultValue="0"/>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:bg-gray-400"
                    >
                      {isSubmitting ? t('buttons.generating') : t('buttons.generate')}
                    </button>
                  </form>

                  {error && (
                    <div className="mt-4 p-3 bg-red-100 text-red-700 rounded">
                      {error}
                    </div>
                  )}
              </div>
    </section>
  )
}

export default TokenCreateSection