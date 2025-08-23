"use client";
import React from 'react'

const EventEditSkeleton = () => {
  return (
    <section className="pl-6 animate-pulse">
    <form className="mt-3">
      <div className="grid grid-cols-1 gap-y-8">
        {/* Event Name */}
        <div className="space-y-2">
          <div className="h-4 w-28 bg-gray-200 rounded"></div>
          <div className="h-9 w-full bg-gray-200 rounded"></div>
        </div>
  
        {/* Event Participant */}
        <div className="space-y-2">
          <div className="h-4 w-32 bg-gray-200 rounded"></div>
          <div className="h-9 w-full bg-gray-200 rounded"></div>
        </div>
  
        {/* Years (DateTime input) */}
        <div className="space-y-2">
          <div className="h-4 w-16 bg-gray-200 rounded"></div>
          <div className="h-9 w-full bg-gray-200 rounded"></div>
        </div>
  
        {/* Button */}
        <div className="col-start-1 col-span-2 w-full">
          <div className="h-10 w-full bg-gray-300 rounded"></div>
        </div>
      </div>
    </form>
  </section>
  )
}

export default EventEditSkeleton