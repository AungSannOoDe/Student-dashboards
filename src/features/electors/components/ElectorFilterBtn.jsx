import React from 'react'
import{
    SheetContent,
      SheetDescription,
      SheetFooter,
      SheetHeader,
      SheetTitle,
}from "@/components/ui/sheet"
const ElectorFilterBtn = () => {
  return (
<SheetContent>
    <SheetHeader>
      <SheetTitle className={`text-4xl font-bold text-stone-600`}>User Filter</SheetTitle>
      <SheetDescription>
       Please make filter
      </SheetDescription>
    </SheetHeader>
        <div className="flex space-x-5">
            <button className="bg-stone-100 border border-stone-500 px-3 py-2 hover:bg-stone-300">Clear Filter</button>
            <button className="bg-blue-500 border border-blue-500 text-white px-6 py-2">Add Filter</button>
        </div>
  </SheetContent>
  )
}

export default ElectorFilterBtn