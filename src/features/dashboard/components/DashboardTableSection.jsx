"use client"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
const DashboardTableSection = ({dashboardData:{
  electors
}}) => {
  return (
<section className="w-full   mt-20">
    <div >
      <div className="overflow-x-auto">
      <h1>Vote table  for Male</h1>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-4 py-3">Elector Name</th>
              <th scope="col" className="px-4 py-3">Image</th>
              <th scope="col" className="px-4 py-3">Gender</th>
              <th scope="col" className="px-4 py-3">Votes</th>
            </tr>
          </thead>
          <tbody>
            {
                electors.length>0 ?
   electors.map((item)=>(
    <tr key={item.id} className="border-b dark:border-gray-700">
    <th scope="row" className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">{item.name}</th>
    <td className="px-4 py-3">
    <Avatar className="rounded-lg">
        <AvatarImage
          src="https://github.com/evilrabbit.png"
          alt="@evilrabbit"
        />
        <AvatarFallback>ER</AvatarFallback>
      </Avatar>
    </td>
    <td className="px-4 py-3">{item.gender}</td>
    <td className="px-4 py-3">{item.votes}</td>
  </tr>
   ))     
               :(
                <tr>There is no data</tr>
               )
            }
          </tbody>

        </table>
      </div>
    </div>
  </section>
  )
}

export default DashboardTableSection