import React from 'react'
import Container from '@/components/Container'
import Navbar from '@/components/navbar'
import DashboardMiddlware from '@/features/dashboard/components/DashboardMiddlware'
import Header from '@/components/Header'
import BreadCrumb from '@/components/BreadCrumb'

const GalleryManagePage = () => {
  return (
    <DashboardMiddlware>
    <Container>
        <Navbar/>
        <DashboardLayout>
       <Header/>
       <BreadCrumb currentPage='Events'/>
       
        </DashboardLayout>
    </Container>
  </DashboardMiddlware>
  )
}

export default GalleryManagePage