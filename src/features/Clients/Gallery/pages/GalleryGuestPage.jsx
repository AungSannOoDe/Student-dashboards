import Footer from '@/components/Footer'
import NavBarHeader from '@/components/NavBarHeader'
import SuccessSection from '@/components/SuccessSection'
import React from 'react'
import GallerySection from '../components/GallerySection'
import StudentNoHeader from '@/components/StudentNoHeader'

const GalleryGuestPage = () => {
  return (
    <>
         <StudentNoHeader/>
        <SuccessSection/>
        <GallerySection/>
        <Footer/>
    </>
   
  )
}

export default GalleryGuestPage