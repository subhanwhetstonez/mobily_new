import React from 'react'

const InternetExchange = () => {
  return (


    <div className='bg-[#EDF7FF]  w-[100%] font-bold flex flex-col'>
      <div className='text-[#005FA6] text-[40px] mb-5 px-[5%] py-[2%]'>Equinix Jeddah Internet Exchange</div>
      <div className='flex justify-between items-center pr-[5%]'>
        <div className="text-[#005FA6] w-[240px] h-[90px] bg-[#FFFFFF] text-[24px] font-semibold 
                flex items-center justify-center mb-10 mx-[5%] my-[2%]">
          Internet Exchange
        </div>
        <div className="">
          <img src="/pages/internet_exchange_title.svg" className='flex items-center justify-center w-[100%]' />
        </div>
      </div>
      <div className="relative flex justify-center">
    <img src="/pages/internet.svg" className="w-full" />
    <img
      src="/pages/exchange_bottom.svg"
      className="absolute bottom-20 left-[6%] w-[200px] h-[200px]" 
    />
  </div>    </div>
  )
}

export default InternetExchange