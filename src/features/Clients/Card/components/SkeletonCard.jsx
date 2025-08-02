import React from 'react'

const SkeletonCard = () => {
  return (
<div className="w-full animate-pulse">
  <div className="bg-stone-200 h-40 w-full rounded-md"></div>

  <div className="flex justify-between mt-3">
    <div className="h-5 bg-stone-300 rounded w-2/3"></div>
    <div className="h-8 w-8 bg-stone-300 rounded-md"></div>
  </div>

  <div className="flex justify-between mt-4">
    <div className="h-4 bg-stone-300 rounded w-24"></div>
    <div className="h-8 bg-stone-300 rounded w-20"></div>
  </div>
</div>
  )
}

export default SkeletonCard