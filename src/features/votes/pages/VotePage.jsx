import Footer from '@/components/Footer'
import StudentHeader from '@/components/StudentHeader'
import HomeLayout from '@/features/Clients/Home/components/HomeLayout'
import React from 'react'
import VoteSection from '../components/VoteSection'

const VotePage = () => {
  return (
<HomeLayout>
<StudentHeader/>
  <VoteSection/>
     <Footer/>
</HomeLayout>
  )
}

export default VotePage