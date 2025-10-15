import Footer from '@/components/Footer'
import StudentHeader from '@/components/StudentHeader'
import React from 'react'
import TermSection from '../components/TermSection'
import TermsHeaderSection from '../components/TermsHeaderSection'

const TermsPage = () => {
  return (
    <>
         <StudentHeader/>
         <TermsHeaderSection/>
    <TermSection/>
         <Footer/>
    </>
   
  )
}

export default TermsPage