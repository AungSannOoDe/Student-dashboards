import React from 'react'

const VoteSection = () => {
  return (
    <section className="overflow-x-auto h-[300px]  px-6">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase border-b-2 border-gray-700 w-fit">
            <tr>
              <th scope="col" className="px-4 py-3">Elector Name</th>
              <th scope="col" className="px-4 py-3">voter code</th>
            <th scope="col" className="px-4 py-3">
                 Years
              </th>
              <th scope="col" className="px-4 py-3">
                 Address
              </th>
                 <th scope="col" className="px-4 py-3">
                     gnder
                  </th>
                <th scope="col" className="px-4 py-3">
                     phone
                  </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="col" className="px-4 py-3">Aung Aung</th>
              <th scope="col" className="px-4 py-3">POS-456</th>
              <th scope="col" className="px-4 py-3">
                 No(19) Aung San. Oo 
              </th>
                <th scope="col" className="px-4 py-3">
                     phone
                  </th>
            </tr>
          </tbody>
          </table>
    </section>
  )
}

export default VoteSection