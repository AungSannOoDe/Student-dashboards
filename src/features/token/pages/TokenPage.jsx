import Container from '@/components/Container'
import React from 'react'
import Navbar from '@/components/navbar'
import DashboardLayout from '@/components/DashboardLayout'
import Header from '@/components/Header'

import DashboardMiddlware from '@/features/dashboard/components/DashboardMiddlware'

import TokenSection from '../components/TokenSection'
import BreadCrumb from '@/components/BreadCrumb'

const TokenPage = () => {
  return (
    <DashboardMiddlware>
      <Container>
        <Navbar />
        <DashboardLayout>
          <Header />
          <BreadCrumb/>
         <TokenSection/>
        </DashboardLayout>
      </Container>
    </DashboardMiddlware>
  );
};

export default TokenPage;
