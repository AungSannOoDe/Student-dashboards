import React from 'react'
import Container from '@/components/Container'
import Navbar from '@/components/navbar'
import DashboardMiddlware from '@/features/dashboard/components/DashboardMiddlware'
import Header from '@/components/Header'
import BreadCrumb from '@/components/BreadCrumb'
import DashboardLayout from '@/components/DashboardLayout'
import GalleryDetailSection from '../components/GalleryDetailSection'

const GalleryDetailPage = () => {
  return (
    <DashboardMiddlware>
    <Container>
        <Navbar/>
        <DashboardLayout>
       <Header/>
       <BreadCrumb currentPage='Detail' links={[{title:"Gallery",path:"/dashboard/gallery"}]} />
       <GalleryDetailSection/>
        </DashboardLayout>
    </Container>
  </DashboardMiddlware>
  )
}

export default GalleryDetailPage