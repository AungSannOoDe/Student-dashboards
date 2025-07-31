
import Container from '@/components/Container'
import Navbar from '@/components/navbar'
import DashboardLayout from '@/components/DashboardLayout'
import Header from '@/components/Header'
import BreadCrumb from '@/components/BreadCrumb'
import DashboardMiddlware from '@/features/dashboard/components/DashboardMiddlware'
import EventCreateSection from '../components/EventCreateSection'
const EventCreatePage = () => {
  return (
<DashboardMiddlware>
    <Container>
        <Navbar/>
        <DashboardLayout>
       <Header/>
       <BreadCrumb currentPage='create' links={[{title:"events",path:"/dashboard/events"}]}/>
       <EventCreateSection/>
        </DashboardLayout>
    </Container>
  </DashboardMiddlware>
  )
}

export default EventCreatePage