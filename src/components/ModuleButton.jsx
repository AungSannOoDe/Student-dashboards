import Link from 'next/link'
import React from 'react'

const ModuleButton = ({name,icon,url,count}) => {
  return (
<Link href={url} className="px-8 py-4  ms-1 active:bg-blue-100 border-l-8 border-blue-500 mb-3  ">
    <div className="   flex  gap-5 hover:text-blue-500  transition-colors duration-500 ">
      {icon}
      <span>{name}</span>
      {count ?<>count</>:<></>}
    </div>
  </Link>
  )
}

export default ModuleButton