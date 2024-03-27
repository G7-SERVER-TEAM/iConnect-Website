import Container from '@/components/Container'
import PageTitle from '@/components/PageTitle'
import ReactDatePicker from '@/components/ReactDatePicker'
import ResultContainer from '@/components/PriceConfig/ResultContainer'
import Table from '@/components/PriceConfig/Table'

const priceBefore = [
  {
    time: "0-2 ชั่วโมง",
    price_rate: "0 บาท",
  },
  {
    time: "2-4 ชั่วโมง",
    price_rate: "20 บาท",
  },
  {
    time: "4-6 ชั่วโมง",
    price_rate: "40 บาท",
  }
]

const priceAfter = [
  {
    time: "0-2 ชั่วโมง",
    price_rate: "0 บาท",
  },
  {
    time: "2-4 ชั่วโมง",
    price_rate: "20 บาท",
  },
  {
    time: "4-6 ชั่วโมง",
    price_rate: "40 บาท",
  }
]

const PriceConfig = () => {

  return (
    <Container>
      <div className='w-full flex flex-col items-start gap-4 pt-16'>
        
        <PageTitle>
          กำหนดราคาค่าจอดรถ
        </PageTitle>

        <div className="w-full flex flex-col bg-white rounded-xl shadow p-4 gap-4">
          <div className="flex flex-row justify-end items-center gap-2">
            <div className='flex flex-row items-center gap-2'>
              <div>วันที่:</div>
              <div className='w-32'>
                <ReactDatePicker 
                  dafaultData={new Date()}
                />
              </div>
            </div>

            <div className='flex flex-row items-center gap-2'>
              <select className="px-3 border border-gray-400 rounded-full ">
                <option value="" selected>เลือกสถานที่</option>
                <option value="location_a">location_a</option>
                <option value="location_b">location_b</option>
                <option value="location_c">location_c</option>
                <option value="location_d">location_d</option>
              </select>
            </div>

            <a
              href="/price-config/edit"
              className="text-center cursor-pointer bg-[#00818A] text-white px-6 py-1 rounded-full whitespace-nowrap"
            >
              แก้ไขราคา
            </a>
          </div>

          <ResultContainer />
        </div>

        <div className='w-full flex flex-col lg:flex-row gap-4'>
          <div className="w-full lg:w-1/2 flex flex-col bg-white rounded-xl shadow p-4 gap-4">
            <div className='text-xl'>ราคาก่อนหน้า</div>
            <Table items={priceBefore} />
          </div>
          <div className="w-full lg:w-1/2 flex flex-col bg-white rounded-xl shadow p-4 gap-4">
            <div className='text-xl'>ราคาหลังการปรับปรุง</div>
            <Table items={priceAfter} />
          </div>          
        </div>

      </div>
    </Container>
  )
}

export default PriceConfig;
