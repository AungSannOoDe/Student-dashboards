"use client";
import { ChevronRight, Pencil, Trash } from 'lucide-react'
import { useSearchParams } from 'next/navigation'
import React from 'react'
import { toast } from 'sonner'
import {  useSWRConfig } from 'swr'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import Link from 'next/link';
import { usDateformat, usTimeformat } from '@/lib/Timer';
import { destoryGallery, galleryApiUrl } from '@/services/gallery';
const GalleryRows = ({gallery:{id,
    title,description,created_at,image_url
},mutate}) => {
 const handleDelete=async()=>{
    try{
const res=await destoryGallery(id)
const json=await res.json()
if(!res.ok){
  throw new Error(`${json.message}`||"Undefined Error") 
}
toast.success("Gallery Deleted Successfully")
 mutate();
    }
    catch(error){
toast.error(error.message)
    }
 }
  return (
<tr className=" odd:bg-gray-100 even:bg-white hover:bg-blue-100 duration-200">
    <th scope="row" className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">{id}</th>
    <td className="px-4 py-3">{title}</td>
     <td className="px-4 py-3" dangerouslySetInnerHTML={{ __html: description }}></td>
    <td className="px-4 py-3">{usDateformat(created_at)}</td>
    <td className="px-4 py-3">{usTimeformat(created_at)}</td>
    <td className="px-4 py-3 flex gap-6">
     <Link href={`/dashboard/gallery/${id}/edit`} className=' size-10 flex justify-center items-center  bg-white border border-stone-200    hover:bg-stone-100 hover:text-blue-500 focus:z-10 focus:ring-2 focus:ring-blue-500 focus:text-blue-500 dark:bg-stone-800 dark:border-stone-700 dark:text-white dark:hover:text-white dark:hover:bg-stone-700 dark:focus:ring-blue-500 dark:focus:text-white'><Pencil className='size-4'/></Link>
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <button  className=' size-10 flex justify-center items-center  bg-white border border-stone-200    hover:bg-stone-100 hover:text-blue-500 focus:z-10 focus:ring-2 focus:ring-blue-500 focus:text-blue-500 dark:bg-stone-800 dark:border-stone-700 dark:text-white dark:hover:text-white dark:hover:bg-stone-700 dark:focus:ring-blue-500 dark:focus:text-white'><Trash className='size-4'/></button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure Delete?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction className={`bg-red-500 `}  onClick={handleDelete}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
     <Link href={`/dashboard/gallery/${id}`}  className=' size-10 flex justify-center items-center  bg-white border border-stone-200    hover:bg-stone-100 hover:text-blue-500 focus:z-10 focus:ring-2 focus:ring-blue-500 focus:text-blue-500 dark:bg-stone-800 dark:border-stone-700 dark:text-white dark:hover:text-white dark:hover:bg-stone-700 dark:focus:ring-blue-500 dark:focus:text-white'><ChevronRight className='size-4'/></Link>
    </td>
  </tr>
  )
}

export default GalleryRows