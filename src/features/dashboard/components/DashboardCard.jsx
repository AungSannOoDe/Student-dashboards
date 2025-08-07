import React from 'react'
import useDashboard from '../hooks/useDashboard'
import DashboardCardSkeleton from './DashboardCardSkeleton';

const DashboardCard = ({dashboardData:{
  user_count,voter_count,token_count
}}) => {
 const modules=[
  {
    name:"Admin",
    data:user_count,
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, nesciunt?"
  },
  {
    name:"Voter",
    data:voter_count,
     description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, nesciunt?"
  },
  {
    name:"Token",
    data:token_count,
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, nesciunt?"
  },
  {
    name:"User",
    data:voter_count,
     description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, nesciunt?"
  }
 ];
  return (
    <>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1  mt-10 gap-6">
      {
          modules.map((module,index)=>(
            <div   key={index} className="w-[270px] h-[150px] bg-gray-200 rounded-lg py-3  px-5 text-stone-500  hover:text-white transition-colors duration-300 hover:bg-blue-500">
            <div className="flex flex-col space-y-4">
              <h1 className="text-2xl">{module.name}</h1>
              <p className="text-4xl  font-bold">{module.data}</p>
              <p className="text-xs truncate">{module.description}</p>
            </div>
          </div>
          ))
        
      }
      </div> 
    </>
  )
}

export default DashboardCard