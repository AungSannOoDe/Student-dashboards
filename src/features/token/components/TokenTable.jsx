import React from 'react'
import TokenRows from './TokenRows'
import TokenEmptyRows from './TokenEmptyRows'

const TokenTable = ({token}) => {
  console.log(token);
  return (
<div className="overflow-x-auto">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="px-4 py-3">#</th>
          <th scope="col" className="px-4 py-3">Token Name</th>
          <th scope="col" className="px-4 py-3">archived</th>
          <th scope="col" className="px-4 py-3">
            Actions
          </th>
        </tr>
      </thead>
      <tbody>
        {
          token?.length==0 ?<TokenEmptyRows/>: (
            token.map(token=>(
                <TokenRows token={token} key={token.id}/>
                ))
          )  
        }
      
      </tbody>
    </table>
  </div>
  )
}

export default TokenTable