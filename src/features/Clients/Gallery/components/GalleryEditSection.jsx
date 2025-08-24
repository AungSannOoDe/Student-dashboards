"use client";
import { fetchGallery, galleryApiUrl } from '@/services/gallery';
import { useParams } from 'next/navigation';
import React from 'react'
import useSWR from 'swr';
import GalleryEditForm from './GalleryEditForm';
import GalleryEditSkeleton from './GalleryEditSkeleton';

const GalleryEditSection = () => {
    const{id}=useParams();
    const{data,isLoading,error}=useSWR(`${galleryApiUrl}/${id}`,fetchGallery);
     if(isLoading){
        return <GalleryEditSkeleton/>
     }
  return (
    <div className="pl-6">
    <h1 className='text-xl font-bold'>Elector Edit Form</h1>
    <GalleryEditForm gallery={data?.data}/>
  </div>
  )
}

export default GalleryEditSection