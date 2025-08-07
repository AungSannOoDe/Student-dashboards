import React from 'react'

const HistorySkeleton = () => {
  return (
    <>
      {Array(4).fill(0).map((_, index) => (
        <div className="w-full animate-pulse mb-4" key={index}>
          <div className="bg-gray-200 w-full h-[200px] rounded"></div>
          <div className="flex justify-between mt-2">
            <div className="h-4 bg-gray-200 rounded w-1/4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/3"></div>
          </div>
        </div>
      ))}
    </>
  )
}

export default HistorySkeleton