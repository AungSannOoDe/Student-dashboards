"use client";
import { AlignJustify, Bell, LogOut } from 'lucide-react'
import React from 'react'
import LogoutButton from './LogoutButton'
import useAccountStore from '@/stores/useAccountStore'
import LanguageSection from './LanguageSection';

const Header = () => {
  const {account:{id,name,email,image},setCollapsed,isCollpased}=useAccountStore();
  const handleCLick=()=>{
      setCollapsed(isCollpased)
  }
  return (
<div className="flex justify-between items-center w-full mb-7 ">
  <div  onClick={handleCLick} className="px-2 py-2 rounded-full cursor-pointer hover:bg-blue-400 group transition-colors duration-300">
    <AlignJustify className="size-9 text-gray-500 group-hover:text-white transition-colors duration-300" />
  </div>
  <div className="flex justify-center items-center gap-5">
    <div className=" flex justify-end items-center gap-5">
      <div className="flex items-center gap-3 cursor-pointer">
        <div className="w-12 h-12">
          <img  src={
            image ? image:
            `https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png`
          } className="rounded-full w-full h-full object-cover"  />
        </div>
        <div className=" ">
          <h1 className="text-sm  font-extrabold">{name}</h1>
          <p className="text-xs text-gray-400 ">{email}</p>
        </div>
        <LanguageSection/>
        <LogoutButton className={`bg-blue-400 border-0 py-2 text-white rounded-sm`}><LogOut className='size-5'/></LogoutButton>
      </div>
    </div>
  </div>
</div>
  )
}

export default Header