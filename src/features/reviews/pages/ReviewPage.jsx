import Footer from '@/components/Footer'
import StudentHeader from '@/components/StudentHeader'
import SuccessSection from '@/components/SuccessSection'
import DetailsSection from '@/features/Clients/Details/components/DetailsSection'
import HomeLayout from '@/features/Clients/Home/components/HomeLayout'
import React from 'react'
import ReviewheaderSection from '../components/ReviewheaderSection'
import ReviewSection from '../components/ReviewSection'
import ReviewMap from '../components/ReviewMap'

const ReviewPage = () => {
  return (
 <HomeLayout>
     <StudentHeader/>
     <SuccessSection/>
     <ReviewheaderSection/>
      <ReviewSection/>
      <ReviewMap/>
     <Footer/>
   </HomeLayout>
  )
}

export default ReviewPage