import React from 'react'
import Container from '@/components/Container'
import Navbar from '@/components/navbar'
import DashboardLayout from '@/components/DashboardLayout'
import Header from '@/components/Header'
import BreadCrumb from '@/components/BreadCrumb'
import DashboardMiddlware from '@/features/dashboard/components/DashboardMiddlware'
import EventListSection from '../components/EventListSection'
const EventsPage = () => {
  return (
<DashboardMiddlware>
    <Container>
        <Navbar/>
        <DashboardLayout>
       <Header/>
       <BreadCrumb currentPage='Events'/>
        <EventListSection/>
        </DashboardLayout>
    </Container>
  </DashboardMiddlware>
  )
}

export default EventsPage