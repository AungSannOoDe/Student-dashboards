import { Camera, Clipboard, LayoutDashboard, Settings, SquareUser, Tag, Trophy, User, UserPen, Users2 } from 'lucide-react'
import React from 'react'
import ModuleButton from './ModuleButton'
import { useTranslations } from 'next-intl'

const navbar = () => {
  const t=useTranslations("AdminNavbar")
  const modules=[
    {
      title:t('Menu'),
      lists:[
        {
          name:t('dashboard'),
          icon: <LayoutDashboard className='text-2xl text-stone-600' />,
          url:"/dashboard"
        },
        {
          name:t('User'),
          icon: <Users2 className='text-2xl text-stone-600'/>,
          url:"/dashboard/users"
        },
        {
          name:t('token'),
          icon:<Tag className='text-2xl text-stone-600' />,
          url:"/dashboard/token"
        },
        {
          name:t('Gallery'),
          icon:<Camera className='text-2xl text-stone-600' />,
          url:"/dashboard/gallery"
        },
        {
          name:t('Elector'),
          icon:<UserPen className='text-2xl text-stone-600' />,
          url:"/dashboard/elector"
        },
        {
          name:t('Events'),
          icon:<Clipboard className='text-2xl text-stone-600' />,
          url:"/dashboard/events"
        }

      ]
    },
    {
      title:t('General'),
      lists:[
        {
          name:t('Profile'),
        icon:<User className='text-2xl text-stone-600'/>,
        url:"/dashboard/profile"
        }
      ]
    }

  ]
  return (
    <div className=" fixed  flex flex-col   w-72  h-[100vh] md:w-64 bg-white shadow-md overflow-hidden  overflow-y-scroll  scrollbar-hide transition-all  z-40">
  <div className="flex justify-center  md:justify-normal gap-6 pt-3 items-center px-8 ">
    <div className="">logo</div>
    <h1 className="font-extrabold text-lg text-nowrap">{t('Voting')}</h1>
    <button className="md:hidden px-3 py-2 bg-gray-100   w-10 h-10 rounded-full  hover:bg-blue-100"><i className="fa-solid fa-bars " /></button>
  </div>
  <div className=" flex grow mt-1 w-full">
    <div className="w-full flex flex-col space-y-12 ">
      {
        modules.map((module)=>(
          <div className="w-full flex  flex-col space-y-1  "  key={module.title}>
             <div className="flex ml-9 ">
              <h1 className="text-sm font-bold text-gray-500">{module.title}</h1>
              </div>
             {
              module.lists.map(({name,icon,url,count},i)=>(
                <ModuleButton  key={i} name={name}  icon={icon} url={url} count={count} />
              ))
             } 
          </div>
        ))
      }
    </div>
  </div>
  <p className="text-blue-500  text-xs ">2025 ©Aung  Sann Oo</p>
</div>
  )
}

export default navbar