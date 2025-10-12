"use client";
import React from 'react'
import HomeLayout from '../components/HomeLayout'
import ClientHeader from '@/components/ClientHeader'
import IndexHeroSection from '../components/IndexHeroSection'
import IndexWelcome from '../components/IndexWelcome'
import IndexPosterSection from '../components/IndexPosterSection'
import IndexAdversit from '../components/IndexAdversit'
import IndexEvent from '../components/IndexEvent'
import IndexSelectionBoys from '../components/IndexSelectionBoys'
import IndexSelectionGril from '../components/IndexSelectionGril'
import IndexReview from '../components/IndexReview'
import Footer from '@/components/Footer'
import IntroSection from '../components/IntroSection'
import useTimer from '@/features/events/hooks/useTimer'
import TimeComponent from '../components/TimeComponent'
import SuccessSection from '@/components/SuccessSection';
import NavBarHeader from '@/components/NavBarHeader';
import NotiForLate from '../components/NotiForLate';
import HistoryGallerySection from '../components/HistoryGallerySection';

const HomePage = () => {
  return (
   <HomeLayout>
     <>
    <SuccessSection/>
   <ClientHeader/>
    <IntroSection/>
    <IndexHeroSection/>
    <IndexWelcome/>
    <div className="relative">
      <IndexPosterSection/>
    </div>
    <IndexAdversit/>
    <IndexEvent/>
     <NotiForLate/>
     <HistoryGallerySection/>
    <IndexSelectionBoys/>
    <IndexSelectionGril/>
    <Footer/>
    </>
   </HomeLayout>
  )
}

export default HomePage