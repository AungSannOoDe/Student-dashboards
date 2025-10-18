"use client";
import LogoutButton from '@/components/LogoutButton';
import useAccountStore from '@/stores/useAccountStore';
import { formattedDate } from '@/utils/dateTime';
import { ArrowUpFromLine, Key, LogOut, LucideCircleUser, NotebookPen, Plus, Trash } from 'lucide-react'
import Link from 'next/link';
import React from 'react'
import UpdateImageSection from './UpdateImageSection';
import { useTranslations } from 'next-intl';

const ProfileSection = () => {
  const {account:{id,name,email,created_at,image}}=useAccountStore();
  
 const t=useTranslations("ProfilePage")
  return (
<section className="pl-10 flex flex-col space-y-10">
  <div className="flex justify-between">
    <div className="">
    <h2 className="font-bold  text-3xl">{t('Accountdetails')}</h2>
    </div>

    <div className="flex  gap-10">
      <Link href={"/dashboard/profile/ChangePassword"} className='inline-flex gap-2 border border-stone-300 px-3 py-1 bg-gray-100 text-stone-600 text-nowrap '> <Key/> {t('password')}</Link>
      <Link href={"/dashboard/profile/ChangeName"} className='inline-flex gap-2 border border-stone-300 px-3 py-1 bg-gray-100 text-stone-600'> <NotebookPen /> {t('changeName')}</Link>
    <LogoutButton><LogOut />{t('logout')}</LogoutButton>
      {/* <button className='></button> */}
    </div>
  </div>
  <div className=" relative inline-block  w-[100px]">
    <img
      className=" size-[100px] rounded-full object-cover border-2 border-blue-600"
      src={
        image ? image : `https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png`
      }
      alt="user photo"
    />
    <UpdateImageSection/>
  </div>
  <div className="bg-blue-50 p-6 max-w-lg  border border-blue-300 space-y-4.5">
    <div className="flex items-center gap-2">
      <LucideCircleUser className="size-5 text-blue-500  " />
      <h4 className="font-medium text-lg">{t('Personal')}</h4>
    </div>
    <div className="space-y-5">
      <dl className=" flex  items-center">
        <dt className="text-stone-500 w-[150px] text-sm  dark:text-white">
          {t('Name')}
        </dt>
        <dd className="text-sm dark:text-stone-400">{name}</dd>
      </dl>
      <dl className=" flex  items-center">
        <dt className="text-stone-500 w-[150px] text-sm dark:text-white">
          {t('Email')}
        </dt>
        <dd className="text-sm dark:text-stone-400">{email}</dd>
      </dl>
      <dl className=" flex  items-center">
        <dt className="text-stone-500 w-[150px] text-sm dark:text-white">
         {t('Role')}
        </dt>
        <dd className="text-sm dark:text-stone-400">Admin</dd>
      </dl>
    </div>
  </div>
  <div className="flex item-center gap-1.5">
    <div>
      <span className="text-xs mb-2">{t('Registered')}</span>
      <p className="text-base font-semibold ">
      {
        formattedDate(created_at)
      }
      </p>
    </div>
  </div>
  {/* <div className="w-full ">
    <form action>
      <div className="grid grid-cols-2">
        <div className="flex flex-col space-y-7">
          <div className="flex flex-col  space-y-2">
            <label htmlFor className="block text-sm ">Name(<span className="text-red-400"> *</span> )</label>
            <input type="text" className="border border-stone-500  h-10 outline-0 w-3/4" placeholder="Enter Name..." />
          </div>
          <div className="flex flex-col  space-y-2">
            <label htmlFor className="block text-sm ">Name(<span className="text-red-400"> *</span> )</label>
            <input type="text" className="border border-stone-500  h-10 outline-0 w-3/4" placeholder="Enter Name..." />
          </div>
          <div className="flex flex-col  space-y-2">
            <label htmlFor className="block text-sm ">Name(<span className="text-red-400"> *</span> )</label>
            <input type="text" className="border border-stone-500  h-10 outline-0 w-3/4" placeholder="Enter Name..." />
          </div>
          <div className="flex flex-col  space-y-2">
            <label htmlFor className="block text-sm ">Name(<span className="text-red-400"> *</span> )</label>
            <input type="text" className="border border-stone-500  h-10 outline-0 w-3/4" placeholder="Enter Name..." />
          </div>
        </div>
        <div className="flex flex-col space-y-7">
          <div className="flex flex-col  space-y-2">
            <label htmlFor className="block text-sm ">Name(<span className="text-red-400"> *</span> )</label>
            <input type="text" className="border border-stone-500  h-10 outline-0 w-3/4" placeholder="Enter Name..." />
          </div>
          <div className="flex flex-col  space-y-2">
            <label htmlFor className="block text-sm ">Name(<span className="text-red-400"> *</span> )</label>
            <input type="text" className="border border-stone-500  h-10 outline-0 w-3/4" placeholder="Enter Name..." />
          </div>
          <div className="flex flex-col  space-y-2">
            <label htmlFor className="block text-sm ">Name(<span className="text-red-400"> *</span> )</label>
            <input type="text" className="border border-stone-500  h-10 outline-0 w-3/4" placeholder="Enter Name..." />
          </div>
          <div className="flex flex-col  space-y-2">
            <label htmlFor className="block text-sm ">Name(<span className="text-red-400"> *</span> )</label>
            <input type="text" className="border border-stone-500  h-10 outline-0 w-3/4" placeholder="Enter Name..." />
          </div>
        </div>
      </div>
    </form>
  </div>
  <div className="w-full pr-34 h-20 ">
    <div className="w-full  flex justify-between ">
      <div className="flex gap-x-6">
        <button className="bg-blue-500 text-white py-1.5 px-4 rounded-sm">Save Changes</button>
        <button className="bg-gray-200 text-stone-500 px-4 py-1.5 rounded-sm ">Cancel</button>
      </div>
      <div className>
        <button className="bg-red-500 text-white px-4 py-1.5 rounded-sm">Delete Account</button>
      </div>
    </div>
  </div> */}
</section>
  )
}

export default ProfileSection