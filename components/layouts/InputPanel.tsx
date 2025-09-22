import React from 'react'
import Input from '../ui/Input'
import TipLayout from './TipLayout'

const InputPanel = () => {
  return (
    <div className='flex flex-col justify-between gap-6 max-sm:w-full w-max h-max p-2 lg:p-5 '>
      <div>
        <p className='input-label mb-2'>Bill</p>
        <Input placeholder="0" imgSrc="/images/icon-dollar.svg" allowFloatingNum={true} />
      </div>
      <TipLayout/>
      <div>
        <p className='input-label mb-2'>Number of People</p>
        <Input placeholder="0" imgSrc="/images/icon-person.svg" allowFloatingNum={false} />
      </div>
    </div>
  )
}

export default InputPanel
