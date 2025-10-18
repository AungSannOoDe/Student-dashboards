import Footer from '@/components/Footer'
import StudentHeader from '@/components/StudentHeader'
import HomeLayout from '@/features/Clients/Home/components/HomeLayout'
import React from 'react'
import ProfilePassword from '../components/ProfilePassword'

const ChangePasswordPage = () => {
  return (
   <HomeLayout>
    <StudentHeader/>
    <ProfilePassword/>
    <Footer/>
   </HomeLayout>
  )
}

export default ChangePasswordPage