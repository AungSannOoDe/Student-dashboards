"use client"
import React from 'react'
import useFemaleDetails from '../hooks/useFemaleDetails'
import parse from 'html-react-parser';
import useSWR from 'swr'
import { fetchvote, voteapiUrl } from '@/services/votes'
import useAccountStore from '@/stores/useAccountStore'
import DetailSkeleton from './DetailSkeleton'

const FemaleDetailSection = () => {
    const { data, isLoading, isSubmitting, register, handleSubmit, onSubmit, account, id, VoteFemale } = useFemaleDetails()
    const { data: votes, isLoading: voteLoading, error } = useSWR(`${voteapiUrl}/${useAccountStore.getState().account.id}`, fetchvote)
    
    if (isLoading || voteLoading) {
        return <DetailSkeleton />
    }

    return (
        <section className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10'>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
                {/* Images Section */}
                <div className="space-y-4 sm:space-y-6">
                    {/* Main Image */}
                    <div className="w-full">
                        {
                            data.image_1_url ? 
                                <img 
                                    src={data.image_1_url} 
                                    className='w-full h-64 sm:h-80 md:h-96 lg:h-[450px] object-cover rounded-lg shadow-md' 
                                    alt={`${data?.elector_name} main`}
                                /> 
                            : 
                                <img 
                                    src="/image-not-found.png" 
                                    className='w-full h-64 sm:h-80 md:h-96 lg:h-[450px] object-cover rounded-lg shadow-md' 
                                    alt="Image not found"
                                />
                        }
                    </div>
                    
                    {/* Thumbnail Images */}
                    <div className="flex justify-between gap-2 sm:gap-3 md:gap-4">
                        {
                            data.image_2_url ? 
                                <img 
                                    src={data.image_2_url} 
                                    className='w-1/4 h-16 sm:h-20 md:h-24 object-cover rounded-lg shadow-sm cursor-pointer hover:opacity-80 transition-opacity' 
                                    alt={`${data?.elector_name} thumbnail 1`}
                                /> 
                            : 
                                <img 
                                    src="/image-not-found.png" 
                                    className='w-1/4 h-16 sm:h-20 md:h-24 object-cover rounded-lg shadow-sm' 
                                    alt="Image not found"
                                />
                        }
                        {
                            data.image_3_url ? 
                                <img 
                                    src={data.image_3_url} 
                                    className='w-1/4 h-16 sm:h-20 md:h-24 object-cover rounded-lg shadow-sm cursor-pointer hover:opacity-80 transition-opacity' 
                                    alt={`${data?.elector_name} thumbnail 2`}
                                /> 
                            : 
                                <img 
                                    src="/image-not-found.png" 
                                    className='w-1/4 h-16 sm:h-20 md:h-24 object-cover rounded-lg shadow-sm' 
                                    alt="Image not found"
                                />
                        }
                        {
                            data.image_4_url ? 
                                <img 
                                    src={data.image_4_url} 
                                    className='w-1/4 h-16 sm:h-20 md:h-24 object-cover rounded-lg shadow-sm cursor-pointer hover:opacity-80 transition-opacity' 
                                    alt={`${data?.elector_name} thumbnail 3`}
                                /> 
                            : 
                                <img 
                                    src="/image-not-found.png" 
                                    className='w-1/4 h-16 sm:h-20 md:h-24 object-cover rounded-lg shadow-sm' 
                                    alt="Image not found"
                                />
                        }
                    </div>
                </div>

                {/* Details Section */}
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-4 sm:space-y-6 lg:space-y-8">
                    <input type="hidden" defaultValue={account.id} {...register('voter_id')} />
                    <input type="hidden" defaultValue={id} {...register('elector_id')}/>
                    
                    {/* Candidate Info */}
                    <div className="space-y-3 sm:space-y-4">
                        <h1 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 break-words'>
                            {data?.elector_name}
                        </h1>
                        
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-sm sm:text-base lg:text-lg">
                            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full font-medium inline-flex items-center justify-center w-fit">
                                {data?.gender}
                            </span>
                            <span className="text-gray-600 font-medium">
                                {data?.phone}
                            </span>
                        </div>
                        
                        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                            {data?.address}
                        </p>
                    </div>

                    {/* Description */}
                    <div className="ProseMirror text-sm sm:text-base lg:text-lg leading-relaxed sm:leading-loose text-gray-700">
                        {parse(data?.description || "No description available")}
                    </div>

                    {/* Submit Button */}
                    {VoteFemale === "1" ? (
                        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg text-center">
                            <p className="font-medium">Already Selected</p>
                            <p className="text-sm mt-1">You have already voted for this candidate</p>
                        </div>
                    ) : (
                        <button 
                            type='submit' 
                            disabled={isSubmitting}
                            className={`
                                w-full sm:w-auto px-6 py-3 sm:py-4 text-white font-semibold rounded-lg 
                                transition-all duration-200 transform hover:scale-105
                                ${isSubmitting 
                                    ? 'bg-gray-400 cursor-not-allowed' 
                                    : 'bg-blue-500 hover:bg-blue-600 shadow-lg hover:shadow-xl'
                                }
                                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                            `}
                        >
                            {isSubmitting ? (
                                <div className="flex items-center justify-center space-x-2">
                                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                    <span>Selecting...</span>
                                </div>
                            ) : (
                                <div className="flex items-center justify-center space-x-2">
                                    <span>Select Candidate</span>
                                </div>
                            )}
                        </button>
                    )}
                </form>
            </div>
        </section>
    )
}

export default FemaleDetailSection