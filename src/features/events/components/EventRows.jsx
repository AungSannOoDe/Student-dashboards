"use client";
import { destoryEvent } from '@/services/event'
import { Pencil, Trash } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { toast } from 'sonner'
import { useSWRConfig } from 'swr'
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
const EventRows = ({
event:{
  id,event_name,event_start_time,event_participant
}
}
) => {
  const{mutate}=useSWRConfig()
  const handleDelete=async()=>{
    try{
const res=await destoryEvent(id)
const json=await res.json()
if(!res.ok){
  throw new Error(`${json.message}`||"Undefined")
}
toast.success(`${json.message}`)
mutate(`/dashboard/events`)
    }
    catch(error){
toast.error(error.message)
    }
  }
  return (
<tr  className="odd:bg-white  odd:dark:bg-gray-900">
    <th scope="row" className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">{id}</th>
    <td className="px-4 py-3">{event_name}</td>
    <td className="px-4 py-3">{event_start_time}</td>
    <td className="px-4 py-3">{event_participant}</td>
    <td className="px-4 py-3 flex gap-3">
    <Link  href={`/dashboard/events/${id}/edit`} className=' size-10 flex justify-center items-center  bg-white border border-stone-200    hover:bg-stone-100 hover:text-blue-500 focus:z-10 focus:ring-2 focus:ring-blue-500 focus:text-blue-500 dark:bg-stone-800 dark:border-stone-700 dark:text-white dark:hover:text-white dark:hover:bg-stone-700 dark:focus:ring-blue-500 dark:focus:text-white'>
        <Pencil  className='size-4'/>
      </Link>
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
    </td>
  </tr>
  )
}

export default EventRows