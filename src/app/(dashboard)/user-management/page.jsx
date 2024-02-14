import Container from '@/components/Container'
import PageTitle from '@/components/PageTitle'
import Table from '@/components/ManageAccount/Table'

const users = [
  {
    key: 1,
    username: "user1",
    firstname: "John",
    lastname: "Doe",
    location: "Central World",
  },
  {
    key: 2,
    username: "user2",
    firstname: "John",
    lastname: "Doe",
    location: "Future Park",
  },
  {
    key: 3,
    username: "user3",
    firstname: "Jane",
    lastname: "Smith",
    location: "Central Rama 9",
  },
  {
    key: 4,
    username: "user4",
    firstname: "Bob",
    lastname: "Johnson",
    location: "Central Ladprao",
  },
  {
    key: 5,
    username: "user5",
    firstname: "Alice",
    lastname: "Williams",
    location: "Future Park",
  },
  {
    key: 6,
    username: "user6",
    firstname: "Charlie",
    lastname: "Brown",
    location: "Siam Paragon",
  },
];


const UserManagement = () => {
  return (
    <Container>
      <div className='w-full flex flex-col items-start gap-4 pt-16'>
        
        <PageTitle>
          จัดการสมาชิก
        </PageTitle>

        <div className='w-full flex flex-row justify-end items-center gap-3'>
          <div className='w-full'>
            <input 
              placeholder='Search for account...'
              className='w-full px-4 py-2 rounded-full'
            />
          </div>
          <div className=''>
            <a
              href="/user-management/add"
              className="text-center cursor-pointer bg-[#00818A] text-white px-6 py-2 rounded-full whitespace-nowrap"
            >
              สร้างสมาชิก
            </a>
          </div>
        </div>

        <div className="w-full flex flex-col bg-white rounded-xl">

          <div className="flex flex-col p-4">
            <div className="text-xl font-bold">รายการสมาชิกทั้งหมด</div>
            <div>{users.length} รายการ</div>
          </div>
    
          <Table 
            items={users}
          />

        </div>

      </div>
    </Container>
  )
}

export default UserManagement;
