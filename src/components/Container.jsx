"use client";
import React from 'react'
import{cn} from"@/lib/utils"
const Container = ({children,className,...props}) => {
  return (
    <div 
    className={cn("w-full min-h-screen flex bg-gray-50  ",className)} {...props}
    >{children}</div>
  )
}

export default Container