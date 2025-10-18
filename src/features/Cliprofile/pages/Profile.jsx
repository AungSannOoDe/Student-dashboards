import Footer from '@/components/Footer'
import StudentHeader from '@/components/StudentHeader'
import SuccessSection from '@/components/SuccessSection'
import HomeLayout from '@/features/Clients/Home/components/HomeLayout'

import React from 'react'
import ProfileSection from '../components/ProfileSection'

const Profile = () => {
  return (
   <HomeLayout>
     <StudentHeader/>
     <SuccessSection/>
     <ProfileSection/>
     <Footer/>
   </HomeLayout>
  )
}

export default Profile