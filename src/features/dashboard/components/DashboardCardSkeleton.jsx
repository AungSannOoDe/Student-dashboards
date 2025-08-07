import React from 'react'

const DashboardCardSkeleton = (count) => {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1  mt-10 gap-6">
      <div 
        className="w-[270px] h-[150px] bg-gray-200 rounded-lg py-3 px-5 animate-pulse"
      >
        <div className="flex flex-col space-y-4">
          {/* Title Skeleton */}
          <div className="h-6 w-3/4 bg-gray-300 rounded"></div>
              
          {/* Data Skeleton (larger number) */}
          <div className="h-10 w-1/2 bg-gray-300 rounded"></div>
              
          {/* Description Skeleton */}
          <div className="h-4 w-full bg-gray-300 rounded"></div>
        </div>
      </div>
      <div 
            className="w-[270px] h-[150px] bg-gray-200 rounded-lg py-3 px-5 animate-pulse"
          >
            <div className="flex flex-col space-y-4">
              {/* Title Skeleton */}
              <div className="h-6 w-3/4 bg-gray-300 rounded"></div>
              
              {/* Data Skeleton (larger number) */}
              <div className="h-10 w-1/2 bg-gray-300 rounded"></div>
              
              {/* Description Skeleton */}
              <div className="h-4 w-full bg-gray-300 rounded"></div>
             
            </div>
          </div>
          <div 
            className="w-[270px] h-[150px] bg-gray-200 rounded-lg py-3 px-5 animate-pulse"
          >
            <div className="flex flex-col space-y-4">
              {/* Title Skeleton */}
              <div className="h-6 w-3/4 bg-gray-300 rounded"></div>
              
              {/* Data Skeleton (larger number) */}
              <div className="h-10 w-1/2 bg-gray-300 rounded"></div>
              
              {/* Description Skeleton */}
              <div className="h-4 w-full bg-gray-300 rounded"></div>
             
            </div>
          </div>
          <div 
            className="w-[270px] h-[150px] bg-gray-200 rounded-lg py-3 px-5 animate-pulse"
          >
            <div className="flex flex-col space-y-4">
              {/* Title Skeleton */}
              <div className="h-6 w-3/4 bg-gray-300 rounded"></div>
              
              {/* Data Skeleton (larger number) */}
              <div className="h-10 w-1/2 bg-gray-300 rounded"></div>
              
              {/* Description Skeleton */}
              <div className="h-4 w-full bg-gray-300 rounded"></div>
            </div>
          </div>
      </div>
  
  )
}

export default DashboardCardSkeleton