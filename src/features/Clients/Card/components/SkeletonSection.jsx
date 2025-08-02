import React from 'react'
import SkeletonCard from './SkeletonCard'

const SkeletonSection = () => {
  return (
    <section className="max-w-7xl   mx-auto">
    <div className="mt-10 space-y-10">
    <h1 className="text-center font-bold text-4xl">Select for Male</h1>
    <div className="grid lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10 sm:gap-y-20 sm:px-6">
        {Array.from({ length: 8 }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
      
      </div>
    </div>
    <div className="mt-10 space-y-10">
    <h1 className="text-center font-bold text-4xl">Select for Female</h1>
    <div className="grid lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10 sm:gap-y-20 sm:px-6">
    {Array.from({ length: 8 }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    </div>
            
   </section>
  )
}

export default SkeletonSection