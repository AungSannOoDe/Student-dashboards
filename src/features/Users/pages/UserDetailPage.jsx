
import Navbar from '@/components/navbar'
import DashboardLayout from '@/components/DashboardLayout'
import Header from '@/components/Header'
import Container from '@/components/Container'
import UserSection from '../components/UserSection'
import BreadCrumb from '@/components/BreadCrumb'
import DashboardMiddlware from '@/features/dashboard/components/DashboardMiddlware'
import UserDetailSection from '../components/UserDetailSection'
const UserDetailPage = () => {
  return (
 <DashboardMiddlware>
  <Container>
    <Navbar/>
    <DashboardLayout >
   <Header/>
   <BreadCrumb currentPage='Users'/>
   <UserDetailSection/>
    </DashboardLayout>
    </Container>
</DashboardMiddlware>
  )
}

export default UserDetailPage