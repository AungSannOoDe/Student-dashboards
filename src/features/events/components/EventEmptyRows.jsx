import Link from 'next/link'
import React from 'react'

const EventEmptyRows = () => {
  return (
    <tr className="odd:bg-white odd:dark:bg-gray-200 even:bg-stone-50 even:dark:bg-stone-800 border-b dark:border-stone-700 ">
    <td colSpan={7} className="px-6 py-4 text-center">
      There is no Employee .{" "}
      <Link
        href="/dashboard/user/create"
        className=" text-blue-500 underline"
      >
        create Events
      </Link>
    </td>
  </tr>
  )
}

export default EventEmptyRows