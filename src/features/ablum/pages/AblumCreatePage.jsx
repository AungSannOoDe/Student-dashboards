import React from 'react'
import BreadCrumb from '@/components/BreadCrumb'
import Container from '@/components/Container'
import DashboardLayout from '@/components/DashboardLayout'
import Header from '@/components/Header'
import Navbar from '@/components/navbar'
import AblumCreateSection from '../components/AblumCreateSection'
const AblumCreatePage = () => {
  return (
<Container>
    <Navbar/>
        <DashboardLayout>
       <Header/>
       <BreadCrumb currentPage='Ablum Create' links={[{title:"elector",path:"/dashboard/elector"},{title:"Ablum",path:"/dashboard/elector/ablum"}]}/>
       <AblumCreateSection/>
        </DashboardLayout>
   </Container>
  )
}

export default AblumCreatePage