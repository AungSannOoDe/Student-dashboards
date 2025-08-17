"use client";
import React from 'react'
import DetailsSection from '../components/DetailsSection'
import Container from '@/components/Container'

import Navbar from '@/components/navbar'
import DashboardLayout from '@/components/DashboardLayout'
import Header from '@/components/Header'
import DashboardMiddlware from '@/features/dashboard/components/DashboardMiddlware'
import ElectorDetailsSection from '../components/ElectorDetailsSection';
import BreadCrumb from '@/components/BreadCrumb';
const ElectorDetailPage = () => {
  return (
    <>
         <DashboardMiddlware>
          <Container>
              <Navbar/>
              <DashboardLayout>
             <Header/>
             <BreadCrumb currentPage='Ablum' links={[{title:"elector",path:"/dashboard/elector"}]}/>
                 <ElectorDetailsSection/>
              </DashboardLayout>
          </Container>
        </DashboardMiddlware>
        
    </>

  )
}

export default ElectorDetailPage