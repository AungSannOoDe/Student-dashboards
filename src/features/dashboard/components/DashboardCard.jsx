import React from 'react'
import useDashboard from '../hooks/useDashboard'
import DashboardCardSkeleton from './DashboardCardSkeleton';
import { TicketX, UserX } from 'lucide-react';

const DashboardCard = ({dashboardData:{
  user_count,voter_count,token_count,elector_count,eventCount,total_votes,galleryCount,ablum_count,token_completed,votedMaleCount,votedFemaleCount
},t}) => {
 const modules=[
  {
    name:t('admin'),
    data:user_count,
    description:t('adminDes')
  },
  {
    name:t('voter'),
    data:voter_count,
    MaleCount:votedMaleCount,
    FemaleCount:votedFemaleCount,
     description:t('voterdes')
  },
  {
    name:t('token'),
    data:token_count,
    completed:token_completed,
    description:t('tokendes')
  },
  {
    name:t('elector'),
    data:elector_count,
     description:t('electordes')
  },
  {
    name:t('Event'),
    data:eventCount,
     description:"The number of events"
  },
  {
    name:"Votes",
    data:total_votes,
     description:"The number of votes"
  },
  {
    name:t('gallery'),
    data:galleryCount,
     description:t('electordes')
  },
  {
    name:t('ablum'),
    data:ablum_count,
     description:t('electordes')
  }
 ];
  return (
    <>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1  mt-10 gap-6">
      {
          modules.map((module,index)=>(
            <div   key={index} className="w-[270px] h-[160px] bg-gray-200 rounded-lg py-3  px-5 text-stone-500   transition-colors duration-300 ">
            <div className="flex flex-col space-y-4">
              <div className="flex justify-between gap-6">
              <h1 className="text-2xl">{module.name}</h1>
              {
                  module.completed ?(
                    <div className="bg-red-400 flex text-red-100 py-1 px-2 self-start mt-2 ">
                      <TicketX className='size-4 self-center' />
                       {module.completed}
                    </div>
                  ):(
                    " "
                  )
                }
                {
                  module.MaleCount ? (
                    <div className="bg-green-400 flex text-red-100 py-1 px-2 self-start mt-2 ">
                    <UserX className='size-4 self-center' />
                     {module.MaleCount}
                  </div>
                  ):(
                    " "
                  )
                }
                {
                  module.FemaleCount ? (
                    <div className="bg-green-400 flex text-red-100 py-1 px-2 self-start mt-2 ">
                    <TicketX className='size-4 self-center' />
                     {module.FemaleCount}
                  </div>
                  ):(
                    " "
                  )
                }
              </div>
              <h1 className="text-2xl">{module.data}</h1>
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