import Container from '@/components/Container'
import PageTitle from '@/components/PageTitle'
import ProfileImage from '@/components/ManageAccount/ProfileImage'
import Form from '@/components/ManageAccount/Form'

const addAccountPage = () => {
  
  return (
    <Container>
      <div className='w-full flex flex-col items-start gap-4 pt-16'>
        
        <div className="w-full flex flex-col">
          <PageTitle>
            จัดการสมาชิก
          </PageTitle>
          <div className="text-xl text-gray-600">เพิ่มสมาชิก</div>
        </div>

        <div className='w-full flex flex-row gap-8'>
          <div className='w-1/4'>
            <ProfileImage />
          </div>
          <div className='w-3/4'>
            <Form />
          </div>
        </div>
      </div>
    </Container>
  )
}

export default addAccountPage;