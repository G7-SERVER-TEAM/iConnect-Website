"use client";

import { useState } from 'react'
import Container from '@/components/Container'
import PageTitle from '@/components/PageTitle'
import ProfileImage from '@/components/ManageAccount/ProfileImage'
import Form from '@/components/Profile/Form'
import isAuth from '@/components/isAuth'

const EditProfile = () => {
  
  const [userId, setUserId] = useState()
  const [username, setUsername] = useState()
  const [firstname, setFirstname] = useState()
  const [lastname, setLastname] = useState()

  return (
    <Container>
      <div className='w-full flex flex-col items-start gap-4 py-16'>
        
        <div className="w-full flex flex-col">
          <PageTitle>
          แก้ไขโปรไฟล์
          </PageTitle>
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
            />
          </div>
        </div>
      </div>
    </Container>
  )
}

export default isAuth(EditProfile);