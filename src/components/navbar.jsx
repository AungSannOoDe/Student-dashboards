import { Camera, Clipboard, LayoutDashboard, Settings, SquareUser, Tag, User, UserPen, Users2 } from 'lucide-react'
import React from 'react'
import ModuleButton from './ModuleButton'

const navbar = () => {
  const modules=[
    {
      title:"Menu",
      lists:[
        {
          name:"Dashboard",
          icon: <LayoutDashboard className='text-2xl text-stone-600' />,
          url:"/dashboard"
        },
        {
          name:"User",
          icon: <Users2 className='text-2xl text-stone-600'/>,
          url:"/dashboard/users"
        },
        {
          name:"token",
          icon:<Tag className='text-2xl text-stone-600' />,
          url:"/dashboard/token"
        },
        {
          name:"Gallery",
          icon:<Camera className='text-2xl text-stone-600' />,
          url:"/dashboard/gallery"
        },
        {
          name:"Elector",
          icon:<UserPen className='text-2xl text-stone-600' />,
          url:"/dashboard/elector"
        },
        {
          name:"Volunteers",
          icon:<SquareUser className='text-2xl text-stone-600' />,
          url:"/dashboard/employee"
        },
        {
          name:"Events",
          icon:<Clipboard className='text-2xl text-stone-600' />,
          url:"/dashboard/events"
        }

      ]
    },
    {
      title:"General",
      lists:[
        {
          name:"profile",
        icon:<User className='text-2xl text-stone-600'/>,
        url:"/dashboard/profile"
        },
        {
          name:"settings",
          icon:<Settings className='text-2xl text-stone-600'/>,
          url:"/dashboard/settings"
        }
      ]
    }

  ]
  return (
    <div className=" fixed  flex flex-col   w-72  md:w-64 bg-white shadow-md overflow-hidden transition-all h-full z-40">
  <div className="flex justify-center  md:justify-normal gap-6 pt-3 items-center px-8 ">
    <div className="">logo</div>
    <h1 className="font-extrabold text-lg text-nowrap">Vote kha mal</h1>
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