"use client";
import { AlignJustify, Bell, LogOut } from 'lucide-react'
import React from 'react'
import LogoutButton from './LogoutButton'
import useAccountStore from '@/stores/useAccountStore'

const Header = () => {
  const {account:{id,name,email,image}}=useAccountStore();
  return (
<div className="flex justify-end items-center w-full mb-7">
  <div className="flex justify-end items-center gap-5">
    <div className=" flex justify-end items-center gap-5">
      <div className="flex items-center gap-3 cursor-pointer">
        <div className="w-12 h-12">
          <img  src={
            image ? image:
            "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
          } className="rounded-full w-full h-full object-cover"  />
        </div>
        <div className=" ">
          <h1 className="text-sm  font-extrabold">{name}</h1>
          <p className="text-xs text-gray-400 ">{email}</p>
        </div>
        <LogoutButton className={`bg-blue-400 border-0 py-2 text-white rounded-sm`}><LogOut className='size-5'/></LogoutButton>
      </div>
    </div>
  </div>
</div>
  )
}

export default Header