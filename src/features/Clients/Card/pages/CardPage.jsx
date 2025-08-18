import ClientHeader from '@/components/ClientHeader'
import Footer from '@/components/Footer'
import StudentHeader from '@/components/StudentHeader'
import React from 'react'
import CardSection from '../components/CardSection'
import HomeLayout from '../../Home/components/HomeLayout'
import TimeComponent from '../../Home/components/TimeComponent'
import SuccessSection from '@/components/SuccessSection'

const CardPage = () => {
  return (
<HomeLayout>
<StudentHeader/>
<SuccessSection/>
  <CardSection/>
     <Footer/>
</HomeLayout>
  )
}

export default CardPage