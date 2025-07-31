import Link from 'next/link'
import React from 'react'

const EmployeeEmptyRows = () => {
  return (
<tr className="odd:bg-white odd:dark:bg-gray-200 even:bg-stone-50 even:dark:bg-stone-800  ">
    <td colSpan={7} className="px-6 py-4 text-center">
      There is no Employee .{" "}
      <Link
        href="/dashboard/user/create"
        className=" text-blue-500 underline"
      >
        create Employee
      </Link>
    </td>
  </tr>
  )
}

export default EmployeeEmptyRows