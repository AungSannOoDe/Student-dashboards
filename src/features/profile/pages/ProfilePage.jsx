import React from 'react'
import Navbar from '@/components/navbar'
import DashboardLayout from '@/components/DashboardLayout'
import Header from '@/components/Header'
import Container from '@/components/Container';
import ProfileSection from '../components/ProfileSection';
import BreadCrumb from '@/components/BreadCrumb';
import DashboardMiddlware from '@/features/dashboard/components/DashboardMiddlware';

const ProfilePage = () => {
  return (
    <DashboardMiddlware>
      <Container>
        <Navbar />
        <DashboardLayout>
          <Header />
          <BreadCrumb currentPage='Profiles'/>
          <ProfileSection/>
        </DashboardLayout>
      </Container>
    </DashboardMiddlware>

  )
}

export default ProfilePage