"use client";
import { AlignJustify, Bell, LogOut } from 'lucide-react'
import React from 'react'
import LogoutButton from './LogoutButton'
import useAccountStore from '@/stores/useAccountStore'

const Header = () => {
  const {account:{id,name,email,}}=useAccountStore();
  return (
<div className="flex justify-between items-center w-full mb-7">
  <div className="flex justify-between items-center gap-5">
    <button className=" px-3 py-2 bg-gray-100 rounded-full  hover:bg-blue-100"><AlignJustify  className='text-2xl' /></button>
    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-3 mt-3">
      <Bell className='text-xl text-gray-500' />
      </div>
      <input type="text" placeholder="Enter..." className="outline-0  pl-10 pr-4 py-2 w-50 md:w-80 border-2 border-gray-500 rounded-lg" />
    </div>  
  </div>
  <div className="flex justify-between items-center gap-5">
    <div className="hidden md:flex justify-between items-center gap-5">
      <div>
        <button>
          <i className="fa-solid fa-sun" />
        </button>
      </div>
      <div className="relative">
        <button>
        <Bell className='text-xl text-gray-500' />
        </button>
        <span className="absolute -top-2 -right-2 text-xs inline-flex items-center  px-[0.4rem] py-1 font-semibold leading-none text-red-100 bg-red-400 rounded-full ">3</span>
      </div>
      <hr className="w-0 h-7  border    border-solid border-l border-gray-300 mx-3 " />
      <div className="flex items-center gap-3 cursor-pointer">
        <div className="w-12 h-12">
          <img  src={
            "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
          } className="rounded-full"  />
        </div>
        <div className=" ">
          <h1 className="text-sm  font-extrabold">{name}</h1>
          <p className="text-xs text-gray-400 ">{email}</p>
        </div>
        <LogoutButton className={`bg-red-400 border-0 py-2 text-white rounded-sm`}><LogOut className='size-5'/></LogoutButton>
      </div>
    </div>
  </div>
</div>
  )
}

export default Header