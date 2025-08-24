"use client";
import React ,{useState} from 'react'
import useCreateToken from '../hooks/useCreateToken';
const TokenCreateSection = () => {
    const{isSubmitting,register,handleSubmit,error,onSubmit}=useCreateToken()
  return (
    <section  className="pl-6">
        <h1 className="font-bold text-3xl">Create Random Token</h1>
        <div className="">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block mb-2">Token Type</label>
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
                        <label className="block mb-2">Algorithm</label>
                        <select
                          {...register('algorithm')}
                          className="w-full p-2 border rounded"
                        >
                          <option value="">Random</option>
                          <option value="sha256">SHA-256</option>
                          <option value="sha512">SHA-512</option>
                          <option value="ripemd160">RIPEMD-160</option>
                          <option value="whirlpool">Whirlpool</option>
                        </select>
                      </div>
                    </div>
              <input type="hidden" {...register("archived_at")}  defaultValue="0"/>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:bg-gray-400"
                    >
                      {isSubmitting ? 'Generating...' : 'Generate Token'}
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