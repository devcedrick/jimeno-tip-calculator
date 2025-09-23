import React from 'react'
import Input from '../ui/Input'
import TipLayout from './TipLayout'
import { useTipCalcContext } from '@/hooks/useTipCalcContext'

const InputPanel = () => {
  const {billAmount, peopleNum, updateBillAmount, updatePeopleCount} = useTipCalcContext();

  const handleBillAmountChange = (value: string) => {
    updateBillAmount(value);
  }

  const handlePeopleCountChange = (value: string) => {
    updatePeopleCount(value);
  }

  return (
    <div className='flex flex-col justify-between gap-8 max-sm:w-full w-max h-max p-2 lg:p-5 '>
      <div>
        <p className='input-label mb-2'>Bill</p>
        <Input placeholder="0" imgSrc="/images/icon-dollar.svg" value={billAmount} allowFloatingNum={true} allowZero={true} onChange={handleBillAmountChange} />
      </div>
      <TipLayout/>
      <div>
        <p className='input-label mb-2'>Number of People</p>
        <Input placeholder="0" imgSrc="/images/icon-person.svg" value={peopleNum} allowFloatingNum={false} allowZero={false} onChange={handlePeopleCountChange}/>
      </div>
    </div>
  )
}

export default InputPanel
