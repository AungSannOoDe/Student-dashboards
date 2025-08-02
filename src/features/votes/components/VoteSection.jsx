import React from 'react'

const VoteSection = () => {
  return (
    <section className="overflow-x-auto h-[300px] mt-5 px-6">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase border-b-2 border-gray-700 w-fit">
            <tr>
              <th scope="col" className="px-4 py-3  font-extrabold text-lg">Elector Name</th>
              <th scope="col" className="px-4 py-3 font-bold  text-lg">voter code</th>
            <th scope="col" className="px-4 py-3 font-bold text-lg">
                 Years
              </th>
              <th scope="col" className="px-4 py-3 font-bold text-lg">
                 Address
              </th>
                 <th scope="col" className="px-4 py-3 font-bold text-lg">
                     gnder
                  </th>
                <th scope="col" className="px-4 py-3 font-bold text-lg">
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