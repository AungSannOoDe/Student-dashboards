
import ClientHeader from '@/components/ClientHeader'
import Footer from '@/components/Footer'
import React from 'react'
import IndexReview from '../components/IndexReview'
import IndexSelectionBoys from '../components/IndexSelectionBoys'
import IndexSelectionGril from '../components/IndexSelectionGril'
import IndexHeroSection from '../components/IndexHeroSection'
import IndexEvent from '../components/IndexEvent'
import IndexPosterSection from '../components/IndexPosterSection'
import IndexAdversit from '../components/IndexAdversit'
import IndexWelcome from '../components/IndexWelcome'
import IntroSection from '../components/IntroSection'
import TimeComponent from '../components/TimeComponent'
import SuccessSection from '@/components/SuccessSection'
import NavBarHeader from '@/components/NavBarHeader'

const IndexPage = () => {
  return (
    <>
    <SuccessSection/>
    <NavBarHeader/>
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
    </>
  )
}

export default IndexPage