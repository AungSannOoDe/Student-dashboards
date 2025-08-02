import React from 'react'

const DetailSkeleton = () => {
  return (
<section className="max-w-7xl mx-auto grid px-5 grid-cols-2 mt-10 gap-x-10 animate-pulse">
  {/* Left image section */}
  <div>
    <div className="w-full h-[450px] bg-stone-300 rounded-md"></div>
    <div className="flex justify-between mt-4 space-x-2">
      <div className="w-1/4 h-24 bg-stone-300 rounded-md"></div>
      <div className="w-1/4 h-24 bg-stone-300 rounded-md"></div>
      <div className="w-1/4 h-24 bg-stone-300 rounded-md"></div>
    </div>
  </div>

  {/* Right content section */}
  <div className="flex flex-col space-y-6">
    <div className="h-10 bg-stone-300 rounded w-1/2"></div>
    <div className="h-8 bg-stone-300 rounded w-1/4"></div>
    <div className="h-8 bg-stone-300 rounded w-1/3"></div>
    
    <div className="space-y-2">
      <div className="h-4 bg-stone-300 rounded w-full"></div>
      <div className="h-4 bg-stone-300 rounded w-[90%]"></div>
      <div className="h-4 bg-stone-300 rounded w-[95%]"></div>
      <div className="h-4 bg-stone-300 rounded w-[85%]"></div>
      <div className="h-4 bg-stone-300 rounded w-[60%]"></div>
    </div>

    <div className="h-12 bg-stone-300 rounded w-1/3"></div>
  </div>
</section>

  )
}

export default DetailSkeleton