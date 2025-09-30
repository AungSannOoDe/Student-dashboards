import Link from 'next/link'
import React from 'react'

const ModuleButton = ({name,icon,url,count,isCollapsed}) => {
  return (
<Link href={url} className="px-8 py-4  ms-1 active:bg-blue-100 border-l-8 border-blue-500 mb-3  ">
    <div className="flex  gap-5 hover:text-blue-500 block  transition-colors  duration-1500  ">
      {icon}
      <div className={`${isCollapsed ?"hidden":"block"}  transition-all  duration-1500 `} >{name}</div>
      {count ?<>count</>:<></>}
    </div>
  </Link>
  )
}

export default ModuleButton