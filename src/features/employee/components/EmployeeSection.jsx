import React from 'react'
import EmployeeInventorySection from './EmployeeInventorySection'
import EmployeeTable from './EmployeeTable'

const EmployeeSection = () => {
  return (
   <section className='pl-6 flex flex-col space-y-6'>
    <h1 className='font-bold text-4xl'>Volunteers</h1>
<EmployeeInventorySection/>
 <EmployeeTable/>
   </section>
  )
}

export default EmployeeSection