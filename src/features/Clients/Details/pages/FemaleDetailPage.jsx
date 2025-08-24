import Footer from '@/components/Footer'
import StudentHeader from '@/components/StudentHeader'
import React from 'react'
import DetailsSection from '../components/DetailsSection'
import HomeLayout from '../../Home/components/HomeLayout'
import SuccessSection from '@/components/SuccessSection'
import FemaleDetailSection from '../components/FemaleDetailSection'
const FemaleDetailPage = () => {
  return (
    <HomeLayout>
    <StudentHeader/>
    <SuccessSection/>
   <FemaleDetailSection/>
    <Footer/>
  </HomeLayout>
  )
}

export default FemaleDetailPage