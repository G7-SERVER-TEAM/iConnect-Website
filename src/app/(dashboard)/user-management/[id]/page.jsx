"use client";

import { useState } from 'react'
import Container from '@/components/Container'
import PageTitle from '@/components/PageTitle'
import ProfileImage from '@/components/ManageAccount/ProfileImage'
import Form from '@/components/ManageAccount/Form'

const editAccountPage = () => {
  
  const [userId, setUserId] = useState()
  const [username, setUsername] = useState()
  const [firstname, setFirstname] = useState()
  const [lastname, setLastname] = useState()
  const [location, setLocation] = useState()

  return (
    <Container>
      <div className='w-full flex flex-col items-start gap-4 pt-16'>
        
        <div className="w-full flex flex-col">
          <PageTitle>
            จัดการสมาชิก
          </PageTitle>
          <div className="text-xl text-gray-600">แก้ไขข้อมูลสมาชิก</div>
        </div>

        <div className='w-full flex flex-row gap-8'>
          <div className='w-1/4'>
            <ProfileImage />
          </div>
          <div className='w-3/4'>
            <Form 
              user_id={userId}
              username={username}
              firstname={firstname}
              lastname={lastname}
              location={location}
            />
          </div>
        </div>
      </div>
    </Container>
  )
}

export default editAccountPage;