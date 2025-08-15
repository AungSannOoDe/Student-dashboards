import Container from '@/components/Container'
import React from 'react'
import DashboardSection from '../components/DashboardSection'
import Navbar from '@/components/navbar'
import DashboardLayout from '@/components/DashboardLayout'
import Header from '@/components/Header'
import BreadCrumb from '@/components/BreadCrumb'
import DashboardMiddlware from '../components/DashboardMiddlware'
import TextEditor from '@/components/CommentEditing'

const DashboardPage = () => {
  return (
    <DashboardMiddlware>
      <Container>
        <Navbar/>
        <DashboardLayout>
       <Header/>
       <BreadCrumb/>
       <DashboardSection/>
        </DashboardLayout>
        </Container>
    </DashboardMiddlware>
  )
}

export default DashboardPage