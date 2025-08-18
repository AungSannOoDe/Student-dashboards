"use client";
import Footer from '@/components/Footer'
import StudentHeader from '@/components/StudentHeader'
import React from 'react'
import HistorySection from '../components/HistorySection'
import HomeLayout from '../../Home/components/HomeLayout';
import SuccessSection from '@/components/SuccessSection';

const HistoryPage = () => {
  return (
    <HomeLayout>
    <StudentHeader/>
    <SuccessSection/>
   <HistorySection/>
    <Footer/>
    </HomeLayout>
  )
}

export default HistoryPage