import React from 'react'

const ResultPanel = () => {
  return (
    <div className='flex flex-col justify-between bg-(--secondary-color) h-max lg:h-100 md:w-full lg:w-max p-8 rounded-xl gap-10 max-lg:min-w-[300px]'>
      <div className='flex flex-col gap-5 lg:gap-10'>
        <div className='flex items-center justify-between lg:gap-25'>
          <div className='w-max'>
            <p className='text-sm font-semibold text-white text-nowrap '>Tip Amount</p>
            <p className='text-xs font-semibold text-gray-400'>/ person</p>
          </div>
          <p className='text-(--primary-color) font-semibold text-4xl'>$0.00</p>
        </div>
        <div className='flex items-center justify-between lg:gap-25'>
          <div className='w-max'>
            <p className='text-sm font-semibold text-white'>Total</p>
            <p className='text-xs font-semibold text-gray-400'>/ person</p>
          </div>
          <p className='text-(--primary-color) font-semibold text-4xl'>$0.00</p>
        </div>
      </div>
      <button className='font-semibold text-lg bg-(--primary-color) text-(--secondary-color) w-full py-3 rounded-md'>RESET</button>
    </div>
  )
}

export default ResultPanel