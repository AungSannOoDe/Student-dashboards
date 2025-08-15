import React from 'react'

const VoteSkeleton = () => {
    return (
        <>
        {
            Array(5).fill(0).map((_,index)=>{
                <tr key={index}>
                  <th scope="col" className="px-4 py-3">
                    <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4"></div>
                  </th>
                  <th scope="col" className="px-4 py-3">
                    <div className="h-10 w-10 bg-gray-200 rounded-full animate-pulse"></div>
                  </th>
                  <th scope="col" className="px-4 py-3">
                    <div className="h-4 bg-gray-200 rounded animate-pulse w-5/6"></div>
                  </th>
                  <th scope="col" className="px-4 py-3">
                    <div className="h-4 bg-gray-200 rounded animate-pulse w-1/2"></div>
                  </th>
                  <th scope="col" className="px-4 py-3">
                    <div className="h-4 bg-gray-200 rounded animate-pulse w-2/3"></div>
                  </th>
                </tr>
            })
        }
        </>
          )
}

export default VoteSkeleton