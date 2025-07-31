import ClientHeader from '@/components/ClientHeader'
import Footer from '@/components/Footer'
import StudentHeader from '@/components/StudentHeader'
import React from 'react'
import CardSection from '../components/CardSection'
import HomeLayout from '../../Home/components/HomeLayout'

const CardPage = () => {
  return (
<HomeLayout>
<StudentHeader/>
  <CardSection/>
     <Footer/>
</HomeLayout>
  )
}

export default CardPage