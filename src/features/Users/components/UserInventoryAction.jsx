import React from 'react'
import {
  Sheet,
  
  SheetTrigger,
} from "@/components/ui/sheet"
import UserFilterButton from './UserFilterButton'
import { Search, SlidersHorizontal, X } from 'lucide-react'
const UserInventoryAction = ({handleSearchInput,clearSearchInput,searchParams,searchRef}) => {
  return (
<div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
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
  <div className="flex items-center space-x-3 w-full md:w-auto">
    <Sheet >
      <SheetTrigger className="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10  focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"><SlidersHorizontal /> Actions</SheetTrigger>
     <UserFilterButton/>
    </Sheet>
    <div id="filterDropdown" className="z-10 hidden w-48 p-3 bg-white rounded-lg shadow dark:bg-gray-700">
      <h6 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">Choose brand</h6>
      <ul className="space-y-2 text-sm" aria-labelledby="filterDropdownButton">
        <li className="flex items-center">
          <input id="apple" type="checkbox" defaultValue className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
          <label htmlFor="apple" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">Apple (56)</label>
        </li>
        <li className="flex items-center">
          <input id="fitbit" type="checkbox" defaultValue className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
          <label htmlFor="fitbit" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">Microsoft (16)</label>
        </li>
        <li className="flex items-center">
          <input id="razor" type="checkbox" defaultValue className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
          <label htmlFor="razor" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">Razor (49)</label>
        </li>
        <li className="flex items-center">
          <input id="nikon" type="checkbox" defaultValue className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
          <label htmlFor="nikon" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">Nikon (12)</label>
        </li>
        <li className="flex items-center">
          <input id="benq" type="checkbox" defaultValue className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
          <label htmlFor="benq" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">BenQ (74)</label>
        </li>
      </ul>
    </div>
  </div>
</div>
  )
}

export default UserInventoryAction