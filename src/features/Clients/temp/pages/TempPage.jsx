import React from 'react'
import HomeLayout from '../../Home/components/HomeLayout'
import StudentHeader from '@/components/StudentHeader'
import Footer from '@/components/Footer'
import TempSection from '../components/TempSection'

const TempPage = () => {
  return (
<HomeLayout>
    <StudentHeader/>
  <TempSection/>
    <Footer/>
    </HomeLayout>
  )
}

export default TempPage