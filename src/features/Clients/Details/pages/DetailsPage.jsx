import Footer from '@/components/Footer'
import StudentHeader from '@/components/StudentHeader'
import React from 'react'
import DetailsSection from '../components/DetailsSection'
import HomeLayout from '../../Home/components/HomeLayout'
import SuccessSection from '@/components/SuccessSection'

const DetailsPage = () => {
  return (
   <HomeLayout>
     <StudentHeader/>
     <SuccessSection/>
     <DetailsSection/>
     <Footer/>
   </HomeLayout>
  )
}

export default DetailsPage