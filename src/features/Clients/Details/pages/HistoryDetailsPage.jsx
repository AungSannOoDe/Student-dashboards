import React from 'react'
import HomeLayout from '../../Home/components/HomeLayout'
import StudentHeader from '@/components/StudentHeader'
import SuccessSection from '@/components/SuccessSection'
import HistoryDetailSection from '../components/HistoryDetailSection'
import Footer from '@/components/Footer'

const HistoryDetailsPage = () => {
  return (
<HomeLayout>
  <StudentHeader/>
     <SuccessSection/>
   <HistoryDetailSection/>
     <Footer/>
   </HomeLayout>
  )
}

export default HistoryDetailsPage