import React from 'react'
import HomeLayout from '../../Home/components/HomeLayout'
import StudentHeader from '@/components/StudentHeader'
import Footer from '@/components/Footer'
import SuccessSection from '@/components/SuccessSection'
import SuccessListSection from '../components/SuccessListSection'

const SuccessPage = () => {
  return (
    <HomeLayout>
    <StudentHeader/>
    {/* <SuccessSection/> */}
    <SuccessListSection/>
    <Footer/>
    </HomeLayout>
  )
}

export default SuccessPage