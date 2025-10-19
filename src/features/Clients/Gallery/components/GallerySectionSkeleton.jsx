import React from 'react'

const GallerySectionSkeleton = () => {
  return (
<main className="main mt-10 mb-10">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
        {
            Array(4).fill(0).map((_,index)=>(
             <figure
              key={index}
              className="rounded-xl overflow-hidden shadow-md border border-gray-200 animate-pulse"
            >
              <div className="h-48 bg-gray-300 w-full"></div>

              <figcaption className="p-4 space-y-3">
                <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                <div className="h-3 bg-gray-300 rounded w-full"></div>
                <div className="h-3 bg-gray-300 rounded w-5/6"></div>
              </figcaption>
            </figure>
            ))
        }
    </div>
    </main>
  )
}

export default GallerySectionSkeleton