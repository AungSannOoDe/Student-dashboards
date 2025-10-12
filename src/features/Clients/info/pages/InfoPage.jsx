import Footer from '@/components/Footer'
import StudentHeader from '@/components/StudentHeader'
import StudentNoHeader from '@/components/StudentNoHeader'
import SuccessSection from '@/components/SuccessSection'
import React from 'react'
import InformationSection from '../components/InformationSection'
import SchoolHistroySection from '../components/SchoolHistroySection'
import SchoolIntroduction from '../components/SchoolIntroduction'
import SchoolbachelorSection from '../components/SchoolbachelorSection'
import MissionSection from '../components/MissionSection'
import VisionSection from '../components/VisionSection'
import ObjectiveSection from '../components/ObjectiveSection'
import { GoalSection } from '../components/GoalSection'
import InfoSection from '../components/InfoSection'

const InfoPage = () => {
  return (
    <>
        <StudentHeader/>
        <InfoSection/>
        <SchoolHistroySection/>
        <GoalSection/>
        <MissionSection/>
        <VisionSection/>
        <ObjectiveSection/>
        <SchoolbachelorSection/>
        <InformationSection/>
        <SuccessSection/>
        <Footer/>
    </>
   
  )
}

export default InfoPage