"use client";
import React from 'react'
import GalleryInventoryAction from './GalleryInventoryAction'
import useSWR from 'swr'
import { fetchGallery, galleryApiUrl } from '@/services/gallery'
import GallerySkeleton from './GallerySkeleton'
import GalleryTable from './GalleryTable'
import useGallery from '../hooks/useGallery';

const GalleryListSection = () => {
   const{data,searchParams,searchRef,isLoading,error,clearSearchInput,handleLimit,handlePaginate,handleSearchInput,handleSort, mutate}=useGallery()

  return (
   <section className='pl-6'>
    <h1 className='font-bold'>Gallery</h1>
     <GalleryInventoryAction searchRef={searchRef} clearSearchInput={clearSearchInput} handleSearchInput={handleSearchInput} searchParams={searchParams}/>
       {
        isLoading ? <GallerySkeleton/> :<GalleryTable gallery={data?.data} mutate={mutate}/>
       }
   </section>
  )
}

export default GalleryListSection