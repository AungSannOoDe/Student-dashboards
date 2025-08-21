import React from 'react'

const ElectorSkeletonedit = () => {
  return (
    <div className="pl-6 animate-pulse">
      {/* Title */}
      <div className="h-7 bg-gray-200 rounded w-48 mb-6"></div>
      
      <div className="max-w-5xl mx-auto rounded-lg shadow-sm p-6 bg-white">
        <form className="mt-3">
          <div className="grid grid-cols-3 gap-x-10 grid-rows-5">
            {/* Elector Name Field */}
            <div className="mb-4">
              <div className="h-4 bg-gray-200 rounded w-24 mb-2"></div>
              <div className="h-9 bg-gray-200 rounded w-full"></div>
            </div>
                      
            {/* Phone Field */}
            <div className="mb-4">
              <div className="h-4 bg-gray-200 rounded w-16 mb-2"></div>
              <div className="h-9 bg-gray-200 rounded w-full"></div>
            </div>
                      
            {/* Gender Field */}
            <div className="mb-4 col-start-1">
              <div className="h-4 bg-gray-200 rounded w-16 mb-2"></div>
              <div className="h-9 bg-gray-200 rounded w-full"></div>
            </div>
                      
            {/* Years Field */}
            <div className="mb-4">
              <div className="h-4 bg-gray-200 rounded w-16 mb-2"></div>
              <div className="h-9 bg-gray-200 rounded w-full"></div>
            </div>
                      
            {/* Gender Field (Duplicate) */}
            <div className="mb-4 col-start-1">
              <div className="h-4 bg-gray-200 rounded w-16 mb-2"></div>
              <div className="h-9 bg-gray-200 rounded w-full"></div>
            </div>
                      
            {/* Won Status Field */}
            <div className="mb-4">
              <div className="h-4 bg-gray-200 rounded w-20 mb-2"></div>
              <div className="h-9 bg-gray-200 rounded w-full"></div>
            </div>
                      
            {/* Address Field */}
            <div className="col-start-1 col-span-2 row-span-5 mb-4">
              <div className="h-5 bg-gray-200 rounded w-16 mb-2"></div>
              <div className="h-32 bg-gray-200 rounded w-full"></div>
            </div>
                      
            {/* Checkbox Section */}
            <div className="col-span-full mt-5">
              <div className="flex items-center mb-4">
                <div className="h-4 w-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded w-48 ml-2"></div>
              </div>
              <div className="flex items-center mb-4">
                <div className="h-4 w-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded w-56 ml-2"></div>
              </div>
            </div>
                      
            {/* Submit Button */}
            <div className="col-start-1 col-span-2 mt-2 w-[105%]">
              <div className="h-11 bg-gray-200 rounded w-full"></div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ElectorSkeletonedit