"use client"
import React from 'react'
import MaleCard from './MaleCard'
import FemaleCard from './FemaleCard'

const CardSection = () => {
  return (
         <section className="max-w-7xl   mx-auto">
          <MaleCard/>
          <FemaleCard/>
         </section>
  )
}

export default CardSection