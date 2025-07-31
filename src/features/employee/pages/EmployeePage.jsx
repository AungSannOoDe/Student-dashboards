
import Container from '@/components/Container'
import Navbar from '@/components/navbar'
import DashboardLayout from '@/components/DashboardLayout'
import Header from '@/components/Header'
import EmployeeSection from '../components/EmployeeSection'
import BreadCrumb from '@/components/BreadCrumb'
import DashboardMiddlware from '@/features/dashboard/components/DashboardMiddlware'
const EmployeePage = () => {
  return (
  <DashboardMiddlware>
    <Container>
        <Navbar/>
        <DashboardLayout>
       <Header/>
       <BreadCrumb currentPage='Volunteers'/>
       <EmployeeSection/>
        </DashboardLayout>
    </Container>
  </DashboardMiddlware>
  )
}

export default EmployeePage