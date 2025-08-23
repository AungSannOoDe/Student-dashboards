import React from 'react'
import Container from '@/components/Container'
import Navbar from '@/components/navbar'
import DashboardMiddlware from '@/features/dashboard/components/DashboardMiddlware'
import Header from '@/components/Header'
import BreadCrumb from '@/components/BreadCrumb'
import DashboardLayout from '@/components/DashboardLayout'
import GalleryCreateSection from '../components/GalleryCreateSection'
const GalleryCreatePage = () => {
  return (
    <DashboardMiddlware>
    <Container>
        <Navbar/>
        <DashboardLayout>
       <Header/>
       <BreadCrumb currentPage='Create' links={[{title:"gallery",path:"/dashboard/gallery"}]}/>
      <GalleryCreateSection/>
        </DashboardLayout>
    </Container>
  </DashboardMiddlware>
  )
}

export default GalleryCreatePage