import React from 'react'
import useYear from '../hooks/useYear';
import Pagnition from '@/components/Pagnition';
import SubjectSkeletonSection from './SubjectSkeletonSection';
import YearInventoryAction from './YearInventoryAction';
import YearSkeleton from './YearSkeleton';
import YearTable from './YearTable';

const YearSection = () => {
 const{searchRef,
data,
isLoading,
error,
handleSearchInput,
clearSearchInput,
handleSort,
handlePaginate,
handleLimit,
updateUrlParams,
searchParams,
mutate}=useYear();

return(
 <section className='pl-10 '>
      
     <h1 className="text-3xl font-bold">Years</h1>
     <div className="w-full   mt-3  space-y-10">
     <YearInventoryAction searchRef={searchRef} clearSearchInput={clearSearchInput} handleSearchInput={handleSearchInput} searchParams={searchParams} />
     {
        isLoading ? <YearSkeleton /> :  <YearTable data={data?.data} mutate={mutate}  />
      }
      {
         <Pagnition
         links={data?.links}
         meta={data?.meta}
         handlePaginate={handlePaginate}
         handleLimit={handleLimit}
       />
      }
         
     </div>
      
       
 
       
  </section>
)
   
}

export default YearSection