'use client'
import React from 'react'
import TipButton from '../ui/TipButton'
import TipInput from '../ui/TipInput'
import { useTipCalculator } from '@/hooks/useTipCalculator'

const TipLayout = () => {
  const {selectedTip, customTip,
    updateTipSelection, updateCustomTip, isTipSelected
  } = useTipCalculator();

  const handleCustomTipChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateCustomTip(e.target.value);
  }

  const handleTipSelection = (tip: number) => {
    updateTipSelection(tip);

    console.log(`Tip Supposedly: ${tip}`);
  }

  return (
    <div className='flex flex-col justify-start lg:w-full h-max gap-4'>
      <p className='input-label'>Select Tip %</p>
      <div className='grid grid-cols-2 sm:grid-cols-3 gap-4'>
        <TipButton percentage={5} isSelected={isTipSelected(5)} onTipSelect={() => handleTipSelection(5)}/>

        <TipButton percentage={10} isSelected={isTipSelected(10)} onTipSelect={() => handleTipSelection(10)}/>

        <TipButton percentage={15} isSelected={isTipSelected(15)} onTipSelect={() => handleTipSelection(15)}/>

        <TipButton percentage={25} isSelected={isTipSelected(25)} onTipSelect={() => handleTipSelection(25)}/>

        <TipButton percentage={50} isSelected={isTipSelected(50)} onTipSelect={() => handleTipSelection(50)}/>

        <TipInput placeholder="Custom" onCustomTipChange={handleCustomTipChange}/>
      </div>
    </div>
  )
}

export default TipLayout
