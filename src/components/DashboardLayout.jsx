import React from 'react'

const DashboardLayout = ({children}) => {
  return (
<div className="flex flex-col w-full h-full py-7 px-9 bg-gray-50 md:pl-72">
{children}
</div>
  )
}

export default DashboardLayout