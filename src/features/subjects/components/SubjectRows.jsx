"use client";
import { Pencil, Trash } from 'lucide-react'
import React from 'react'
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
import { Button } from "@/components/ui/button"
import {  destoryToken, AdminTokenApiUrl } from '@/services/token'
import { toast } from 'sonner'
import { useSWRConfig } from 'swr'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
const SubjectRows = ({token:{
    id,sub_name,description,year
},mutate}) => {
    const  deleting=async()=>{
        try {
          const res = await destoryToken(id);
          const json = await res.json();
          if (!res.ok) {
            throw new Error(json.message);
          }
          toast.success(json.message||"Deleting Error");
          mutate();
        } catch (err) {
          toast.error(err.message);
          console.error(err);
        }
      }
  return (
<tr  className="odd:bg-white  odd:dark:bg-gray-900">
    <th scope="row" className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">{id}</th>
    <td className="px-4 py-3">{sub_name}</td>
    <td className="px-4 py-3">{year.year_name}</td>
    <td className="px-4 py-3">{description}</td>
    <td className="px-4 py-3 flex gap-3">
    <Link  href={`/dashboard/subjects/${id}/edit`} className=' size-10 flex justify-center items-center  bg-white border border-stone-200    hover:bg-stone-100 hover:text-blue-500 focus:z-10 focus:ring-2 focus:ring-blue-500 focus:text-blue-500 dark:bg-stone-800 dark:border-stone-700 dark:text-white dark:hover:text-white dark:hover:bg-stone-700 dark:focus:ring-blue-500 dark:focus:text-white'>
        <Pencil  className='size-4'/>
      </Link>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="outline" className=' size-10 flex justify-center items-center  bg-white border border-stone-200  rounded-none  hover:bg-stone-100 hover:text-blue-500 focus:z-10 focus:ring-2 focus:ring-blue-500 focus:text-blue-500 dark:bg-stone-800 dark:border-stone-700 dark:text-white dark:hover:text-white dark:hover:bg-stone-700 dark:focus:ring-blue-500 dark:focus:text-white'> <Trash className='size-4'/></Button>
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
            <AlertDialogAction className={`bg-red-500 `}  onClick={deleting} >Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </td>
  </tr>
  )
}

export default SubjectRows