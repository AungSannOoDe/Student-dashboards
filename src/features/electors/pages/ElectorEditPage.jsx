
import ElectorEditSection from '../components/ElectorEditSection'
import Container from '@/components/Container'
import Navbar from '@/components/navbar'
import DashboardLayout from '@/components/DashboardLayout'
import Header from '@/components/Header'
import BreadCrumb from '@/components/BreadCrumb'
import DashboardMiddlware from '@/features/dashboard/components/DashboardMiddlware'

const ElectorEditPage = () => {
  return (
<DashboardMiddlware>
  <Container>
        <Navbar/>
        <DashboardLayout>
       <Header/>
  <BreadCrumb currentPage='Edit' links={[{title:"elector",path:"/dashboard/elector"}]}/>
  <ElectorEditSection/>
        </DashboardLayout>
    </Container>
</DashboardMiddlware>
  )
}

export default ElectorEditPage