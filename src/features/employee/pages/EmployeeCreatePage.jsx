import Container from '@/components/Container'
import Navbar from '@/components/navbar'
import DashboardLayout from '@/components/DashboardLayout'
import Header from '@/components/Header'
import EmployeeSection from '../components/EmployeeSection'
import BreadCrumb from '@/components/BreadCrumb'
import DashboardMiddlware from '@/features/dashboard/components/DashboardMiddlware'
import EmployeeCreateSection from '../components/EmployeeCreateSection'
const EmployeeCreatePage = () => {
  return (
    <DashboardMiddlware>
    <Container>
        <Navbar/>
        <DashboardLayout>
       <Header/>
       <BreadCrumb currentPage='Create' links={[{title:"volunteers",path:"/dashboard/employee"}]}/>
       <EmployeeCreateSection/>
        </DashboardLayout>
    </Container>
  </DashboardMiddlware>
  )
}

export default EmployeeCreatePage