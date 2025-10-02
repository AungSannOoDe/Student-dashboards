"use client";
import { Camera, Clipboard, Image, LayoutDashboard, Settings, SquareUser, Tag, Trophy, User, UserPen, Users2 } from 'lucide-react'
import React from 'react'
import ModuleButton from './ModuleButton'
import { useTranslations } from 'next-intl'
import useAccountStore from '@/stores/useAccountStore'

const navbar = () => {
  const t=useTranslations("AdminNavbar")
  const {isCollpased}=useAccountStore()
  const modules=[
    {
      title:t('Menu'),
      lists:[
        {
          name:t('dashboard'),
          icon: <LayoutDashboard className='text-2xl text-stone-600' />,
          url:"/dashboard",
          isCollpased:isCollpased,
        },
        {
          name:t('User'),
          icon: <Users2 className='text-2xl text-stone-600'/>,
          url:"/dashboard/users",
          isCollpased:isCollpased,
        },
        {
          name:"volunteers",
          icon: <Users2 className='text-2xl text-stone-600'/>,
          url:"/dashboard/employee",
          isCollpased:isCollpased,
        },
        {
          name:"Ablum",
          icon: <Image className='text-2xl text-stone-600'/>,
          url:"/dashboard/ablum/create",
          isCollpased:isCollpased,
        },
        {
          name:t('token'),
          icon:<Tag className='text-2xl text-stone-600' />,
          url:"/dashboard/token",
          isCollpased:isCollpased,
        },
        {
          name:t('Gallery'),
          icon:<Camera className='text-2xl text-stone-600' />,
          url:"/dashboard/gallery",
          isCollpased:isCollpased,
        },
        {
          name:t('Elector'),
          icon:<UserPen className='text-2xl text-stone-600' />,
          url:"/dashboard/elector",
          isCollpased:isCollpased,
        },
        {
          name:t('Events'),
          icon:<Clipboard className='text-2xl text-stone-600' />,
          url:"/dashboard/events",
          isCollpased:isCollpased,
        }
      ]
    },
    {
      title:t('General'),
      lists:[
        {
          name:t('Profile'),
        icon:<User className='text-2xl text-stone-600'/>,
        url:"/dashboard/profile",
        isCollpased:isCollpased,
        }
      ]
    }

  ]
  return (
    <div className={`fixed  flex flex-col   ${!isCollpased ? "w-64 ": "w-30" }   transition-all duration-1000   h-[100vh]  bg-white shadow-md overflow-hidden  overflow-y-scroll  scrollbar-hide transition-all  z-40`}>
  <div className="flex justify-center  md:justify-normal gap-6 pt-3 items-center px-8 ">
    <div className="">logo</div>
    <h1 className={`font-extrabold text-lg text-nowrap transition-all  duration-1500  ${!isCollpased ?"block":"hidden"} `}>{t('Voting')}</h1>
  </div>
  <div className=" flex grow mt-1 w-full w-3">
    <div className="w-full flex flex-col space-y-12 ">
      {
        modules.map((module)=>(
          <div className="w-full flex  flex-col space-y-1"  key={module.title}>
             <div className="flex ml-9 ">
              <h1 className={`text-sm font-bold text-gray-500  transition-all  duration-1500  ${!isCollpased ?"block":"hidden"}`}>{module.title}</h1>
              </div>
             {
              module.lists.map(({name,icon,url,count,isCollpased},i)=>(
                <ModuleButton  key={i} name={name} isCollapsed={isCollpased}  icon={icon} url={url} count={count} />
              ))
             } 
          </div>
        ))
      }
    </div>
  </div>
  <p className="text-blue-500  text-xs hidden ">2025 ©Aung  Sann Oo</p>
</div>
  )
}

export default navbar