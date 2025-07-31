"use client";
import {
  Sheet,
  SheetTrigger,
} from "@/components/ui/sheet"

import { Search, SlidersHorizontal, X } from 'lucide-react'
import Link from 'next/link';
import ElectorFilterBtn from "./ElectorFilterBtn";
const ElectorInventoryAction = ({searchRef,searchParams,handleSearchInput,clearSearchInput}) => {
  return (
  <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
  <div className="">
      <div className="relative ">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
          <Search className="w-4 h-4 text-stone-500 dark:text-stone-400" />
        </div>
        <input
          type="text"
          className=" w-96 bg-stone-50 border border-stone-300 text-stone-900 text-sm  focus:ring-pink-500 focus:border-pink-500 block ps-10 p-2.5  dark:bg-stone-700 dark:border-stone-600 dark:placeholder-stone-400 dark:text-white dark:focus:ring-pink-500 dark:focus:border-pink-500"
          placeholder="Search "
          onChange={handleSearchInput}
          ref={searchRef}
        />
        {searchParams?.get("q") && (
          <div
            className="absolute inset-y-0 end-0 flex items-center pe-3.5 cursor-pointer"
            onClick={clearSearchInput}
          >
            <X className="w-4 h-4 text-stone-500 dark:text-stone-400" />
          </div>
        )}
      </div>
    </div>
    <div className="flex items-center space-x-3 w-full md:w-auto">
      <Sheet >
        <SheetTrigger className="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10  focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"><SlidersHorizontal /> Actions</SheetTrigger>
       <ElectorFilterBtn/>
      </Sheet>
      <div>
        <Link  href={`/dashboard/elector/create`} className="py-2 px-4 rounded-sm text-white bg-blue-500 outline-0 "><i className="fa fa-plus" />  Create Electors</Link>
      </div>
    </div>
  </div>
  )
}

export default ElectorInventoryAction