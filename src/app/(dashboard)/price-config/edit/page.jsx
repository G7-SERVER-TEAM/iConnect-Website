import Container from '@/components/Container'
import PageTitle from '@/components/PageTitle'
import ReactDatePicker from '@/components/ReactDatePicker'
import SettingContainer from '@/components/PriceConfig/SettingContainer'
import Table from '@/components/PriceConfig/Table'

const PriceConfigEdit = ({location="Future Park Rangsit"}) => {

  return (
    <Container>
      <div className='w-full flex flex-col items-start gap-4 pt-16'>
        
        <div className="w-full flex flex-col">
          <PageTitle>
            กำหนดราคาค่าจอดรถ
          </PageTitle>
          <div className="text-xl text-gray-600">แก้ไขราคาค่าจอดรถ</div>
        </div>

        <div className='w-full'>
          <SettingContainer title={location}/>
        </div>

      </div>
    </Container>
  )
}

export default PriceConfigEdit;
