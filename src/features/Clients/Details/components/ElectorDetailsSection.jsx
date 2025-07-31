import Spinner from '@/components/Spinner';
import { electorApiUrl, fetchElectors } from '@/services/electors';
import Link from 'next/link';
import { useParams } from 'next/navigation'
import React from 'react'
import useSWR from 'swr';

const ElectorDetailsSection = () => {
  const {id}=useParams();
  const{data,isLoading,error}=useSWR(`${electorApiUrl}/${id}`,fetchElectors)
  if (isLoading) {
    return <Spinner />;
  }
  console.log(data);
  return (
 <section className='max-w-7xl mx-auto grid  px-5 grid-cols-2 mt-10 gap-x-10'>
    <div className="">
        <img src="../images/1.png" className='w-full h-[450px]  object-cover' />
        <div className="flex  justify-between mt-4 ">
        <img src="../images/4.png" className='w-1/4' />
            <img src="../images/2.png" className='w-1/4'  />
            <img src="../images/3.png" className='w-1/4'/>
        </div>
    </div>
    <div className="flex flex-col space-y-10">
     <p className='text-4xl font-bold'>Mg Mg</p>
     <p className='text-2xl'>Male</p>
     <p className='text-2xl'>09-677513378</p>
   <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus optio illum magni soluta aliquid nobis, dolorem consequatur possimus nesciunt pariatur rerum dolorum aut perferendis tempore id! Deleniti ratione quo vel modi ab ex id repellendus laboriosam tenetur impedit fugit maxime aliquam necessitatibus perspiciatis ipsam explicabo cupiditate possimus, repudiandae asperiores? Tempora, saepe eligendi vero, accusamus, debitis totam iste esse explicabo incidunt error itaque. Sed doloribus tempore deserunt nihil, itaque voluptatum iure repudiandae nobis consequatur libero eum optio in odio aut tempora laboriosam perferendis esse eveniet. Vero numquam possimus, quasi, accusamus harum odio odit facilis sapiente itaque distinctio similique? Corrupti, officiis architecto.</p>
   <Link href={`/dashboard/elector/${id}/edit`} className='bg-blue-500 py-3 text-white text-center'>Edit</Link>
    </div>
   </section>
  )
}

export default ElectorDetailsSection