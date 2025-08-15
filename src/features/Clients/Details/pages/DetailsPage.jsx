import Footer from '@/components/Footer'
import StudentHeader from '@/components/StudentHeader'
import React from 'react'
import DetailsSection from '../components/DetailsSection'
import HomeLayout from '../../Home/components/HomeLayout'

const DetailsPage = () => {
  return (
   <HomeLayout>
     <StudentHeader/>
     
     <DetailsSection/>
     <Footer/>
   </HomeLayout>
  )
}

export default DetailsPage