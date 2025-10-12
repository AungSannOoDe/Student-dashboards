import React from 'react'
import RegisterSection from '../components/RegisterSection'
import HomeLayout from '../../Home/components/HomeLayout'
import RegisterLayout from '../components/RegisterLayout'

const RegisterPage = () => {
  return (
   <>
   <RegisterLayout>
     <RegisterSection/>
   </RegisterLayout>
   </>
  )
}

export default RegisterPage