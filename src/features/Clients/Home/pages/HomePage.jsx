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

const HomePage = () => {
  return (
   <HomeLayout>
    <ClientHeader/>
    <IntroSection/>
    <IndexHeroSection/>
    <IndexWelcome/>
    <IndexPosterSection/>
    <IndexAdversit/>
    <IndexEvent/>
    <IndexAdversit/>
    <IndexSelectionBoys/>
    <IndexAdversit/>
    <IndexSelectionGril/>
    <IndexReview/>
    <Footer/>
   </HomeLayout>
  )
}

export default HomePage