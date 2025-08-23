import Container from '@/components/Container'
import DashboardMiddlware from '@/features/dashboard/components/DashboardMiddlware'
import React from 'react'
import Navbar from '@/components/navbar'
import EventEditForm from '../components/EventEditForm'

const EventDetailPage = () => {
  return (
<DashboardMiddlware>
    <Container>
        <Navbar/>
        <DashboardLayout>
       <Header/>
       <BreadCrumb currentPage='Edit' links={[{title:"events",path:"/dashboard/events"}]} />
      <EventEditForm/>
        </DashboardLayout>
    </Container>
  </DashboardMiddlware>
  )
}

export default EventDetailPage