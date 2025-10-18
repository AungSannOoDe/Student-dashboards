import Footer from '@/components/Footer'
import StudentHeader from '@/components/StudentHeader'
import SuccessSection from '@/components/SuccessSection'
import HomeLayout from '@/features/Clients/Home/components/HomeLayout'
import React from 'react'
import ProfileChangeName from '../components/ProfileChangeName'

const ChangeNamePage = () => {
  return (
    <HomeLayout>
        <StudentHeader/>
         <SuccessSection/>
         <ProfileChangeName/>
         <Footer/>
    </HomeLayout>
  )
}

export default ChangeNamePage