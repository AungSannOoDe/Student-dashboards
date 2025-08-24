import React from 'react'

const GalleryDetailSkeleton = () => {
  return (
   <section className="pl-6 space-y-6">
  <div className="w-1/2">
    <div className="skeleton w-full h-64" />
  </div>
  <div className="p-6 max-w-lg space-y-4.5">
    <div className="flex items-center gap-2">
      <div className="skeleton size-5 rounded-full" />
      <div className="skeleton h-6 w-48" />
    </div>
    <div className="space-y-5">
      <div className="flex items-center">
        <div className="skeleton h-5 w-36 mr-4" />
        <div className="skeleton h-4 w-24" />
      </div>
      <div className="flex items-center">
        <div className="skeleton h-5 w-36 mr-4" />
        <div className="skeleton h-4 w-32" />
      </div>
    </div>
  </div>
</section>

  )
}

export default GalleryDetailSkeleton