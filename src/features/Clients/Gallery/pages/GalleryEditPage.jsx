
import React from 'react'
import Container from '@/components/Container'
import Navbar from '@/components/navbar'
import DashboardMiddlware from '@/features/dashboard/components/DashboardMiddlware'
import Header from '@/components/Header'
import BreadCrumb from '@/components/BreadCrumb'
import DashboardLayout from '@/components/DashboardLayout'
import GalleryListSection from '../components/GalleryListSection'
import GalleryEditSection from '../components/GalleryEditSection'
const GalleryEditPage = () => {
  return (
    <DashboardMiddlware>
    <Container>
        <Navbar/>
        <DashboardLayout>
       <Header/>
       <BreadCrumb currentPage='Edit' links={[{title:"gallery",path:"/dashboard/gallery"}]}/>
       <GalleryEditSection/>
        </DashboardLayout>
    </Container>
  </DashboardMiddlware>
  )
}

export default GalleryEditPage