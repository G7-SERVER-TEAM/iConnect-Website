import Image from 'next/image'
import React from 'react';


export default function BusinessOverview() {
  return (
    <main
      className="bg-white h-screen borderxborder-black"
      style={{overflow: 'hidden'}}
    >
      <div className="flex borderxborder-black">
        {/* <div className="borderxborder-black" style={{ width: '270px',height: '749px' }}>
          <div className="borderxborder-black" style={{ marginTop: '12px',height: '100px' }}>
            <h1 className="text-black borderxborder-black">
              iconnect
            </h1>
          </div>
          <div className="borderxborder-black" style={{ marginTop: '30px', marginLeft: '7px',marginRight: '7px',height: '46px' }}>
            <h1 className="text-black borderxborder-black">
              ภาพรวม
            </h1>  
          </div> 
          <div className="borderxborder-black" style={{ marginTop: '14px', marginLeft: '7px',marginRight: '7px',height: '46px' }}>
            <h1 className="text-black borderxborder-black">
              พฤติกรรมผู้ใช้บริการ
            </h1> 
          </div>   
          <div className="borderxborder-black" style={{ marginTop: '14px', marginLeft: '7px',marginRight: '7px',height: '46px' }}>
            <h1 className="text-black borderxborder-black">
              จัดการสมาชิก
            </h1>     
          </div>    
          <div className="borderxborder-black" style={{ marginTop: '365px', marginLeft: '7px',marginRight: '7px',height: '69px' }}> 
            <h1 className="text-black borderxborder-black">
              john spem
            </h1>      
          </div> 
        </div> */}
        <div className="borderxborder-black" style={{ backgroundColor: '#E4E5DB', width: '100%',height: '100vh' }}>
          <div className="borderxborder-black" style={{ marginTop: '50px',height: '50px' }}>
            <h1 className="text-black borderxborder-black" style={{ color: '#000000',marginTop: '6px',marginLeft: '47px',fontSize: '32px', fontWeight: 'bold',height: '35px',lineHeight: '0.9' }}>
                ภาพรวมธรุกิจ
            </h1>
          </div>
          
          <div className="borderxborder-black flex" style={{ marginTop: '17px'}}>
            <div className="borderxborder-black" style={{ margin:'auto',padding:'10px'}}>
                <div className="flex borderxborder-black" style={{ height: '28px' }}>   
                  <div className="borderxborder-black" style={{ marginLeft: '574px',width: '126px' }}>
                    <h1 className="text-black borderxborder-black">
                      รายวัน
                    </h1>  
                  </div>  
                  <div className="borderxborder-black" style={{ width: '45px' }}>
                    <h1 className="text-black borderxborder-black" style={{color: '#404B69',marginLeft: '2px',marginTop: '4px',lineHeight: '16px'}}>
                      เดือน:
                    </h1>
                  </div>   
                  <div className="borderxborder-black" style={{ width: '110px' }}>
                    <h1 className="text-black borderxborder-black">
                      ตุลาคม
                    </h1>  
                  </div>
                </div>
                <div className="flex borderxborder-black" style={{ marginTop: '8px',height: '187px' }}>   
                  <div className="borderxborder-black" style={{ backgroundColor: '#FFFFFF',width: '420px',borderRadius: '8px' }}>
                    <h1 className="text-black borderxborder-black" style={{ color: '#404B69',marginLeft: '26px', marginTop: '37px',fontSize: '33px',lineHeight: '45px',height: '38px' }}>
                      รายได้เฉลี่ย
                    </h1> 
                    <h1 className="text-black borderxborder-black" style={{ color: '#000000',marginLeft: '26px', marginTop: '6px',fontSize: '52px',fontWeight: 'bold',lineHeight: '45px',height: '52px' }}>
                      XXX,XXX บาท
                    </h1> 
                  </div> 
                  <div className="borderxborder-black" style={{ backgroundColor: '#FFFFFF',marginLeft: '15px',width: '420px',borderRadius: '8px' }}>
                      <div className="flex borderxborder-black items-center justify-center h-full" style={{ marginTop: '24px',fontSize: '52px',fontWeight: 'bold',lineHeight: '45px',height: '45px' }}>
                          <div className="borderxborder-black" style={{ height: '45px',width: '60px' }}>
                              <Image
                                  src="/triangle-up-small.svg"
                                  alt="Triangle Up Small"
                                  style={{ marginTop: '-9px',marginLeft: '-5px',width: '70px',position:'absolute' }}
                                  width={100}
                                  height={10}
                              />
                          </div>
                          <h1 className="text-black borderxborder-black" style={{color: '#000000'}}>
                              XX%
                          </h1> 
                      </div>
                      <div className="flex borderxborder-black items-center justify-center h-full" style={{ marginTop: '12px',fontSize: '35px',lineHeight: '30px',height: '30px' }}>
                          <h1 className="text-black borderxborder-black" style={{color: '#404B69',}}>
                                  ของรายได้
                          </h1> 
                      </div>
                      <div className="flex borderxborder-black" style={{ marginTop: '20px' }}>
                          <div className="borderxborder-black" style={{ width: '210px' }}>
                              <h1 className="flex text-black borderxborder-black items-center justify-center h-full"  style={{ color: '#000000',height: '22px',fontSize: '20px' }}>
                                  XXX,XXX บาท
                              </h1>
                              <h1 className="flex text-black borderxborder-black items-center justify-center h-full"  style={{ color: '#404B69',height: '29px',fontSize: '20px' }}>
                                  เมื่อวาน
                              </h1>
                          </div>
                          <div className="borderxborder-black" style={{ width: '210px' }}>
                              <h1 className="flex text-black borderxborder-black items-center justify-center h-full"  style={{ color: '#000000',height: '22px',fontSize: '20px' }}>
                                  XXX,XXX บาท
                              </h1>
                              <h1 className="flex text-black borderxborder-black items-center justify-center h-full"  style={{ color: '#404B69',height: '29px',fontSize: '20px' }}>
                                  วันนี้
                              </h1>
                          </div>
                      </div>
                  </div>
                </div>    
                <div className="borderxborder-black" style={{ backgroundColor: '#FFFFFF',marginTop: '13px',height: '330px' ,width: '857px',borderRadius: '8px' }}> 
                  <h1 className="text-black borderxborder-black" style={{ color: '#404B69',marginLeft: '26px', marginTop: '5px',fontSize: '33px',lineHeight: '45px',height: '38px' }}>
                      รายได้
                    </h1> 
                </div>      
              </div>   
            </div>
        </div>
      </div>
    </main>
  )
}
