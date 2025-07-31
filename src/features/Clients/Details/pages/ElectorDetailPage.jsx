"use client";
import React from 'react'
import DetailsSection from '../components/DetailsSection'
import Container from '@/components/Container'

import Navbar from '@/components/navbar'
import DashboardLayout from '@/components/DashboardLayout'
import Header from '@/components/Header'
import DashboardMiddlware from '@/features/dashboard/components/DashboardMiddlware'
import ElectorDetailsSection from '../components/ElectorDetailsSection';
const ElectorDetailPage = () => {
  return (
    <>
         <DashboardMiddlware>
          <Container>
              <Navbar/>
              <DashboardLayout>
             <Header/>
                 <ElectorDetailsSection/>
              </DashboardLayout>
          </Container>
        </DashboardMiddlware>
        
    </>

  )
}

export default ElectorDetailPage