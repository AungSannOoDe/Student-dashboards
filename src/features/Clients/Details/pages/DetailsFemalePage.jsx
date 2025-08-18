import React from 'react'
import HomeLayout from '../../Home/components/HomeLayout'
import StudentHeader from '@/components/StudentHeader'
import FemaleDetailsSection from '../components/FemaleDetailsSection'
import Footer from '@/components/Footer'
import SuccessSection from '@/components/SuccessSection'

const DetailsFemalePage = () => {
  return (
    <HomeLayout>
    <StudentHeader/>
    <SuccessSection/>
    <FemaleDetailsSection/>
    <Footer/>
  </HomeLayout>
  )
}

export default DetailsFemalePage