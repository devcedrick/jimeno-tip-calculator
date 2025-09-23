"use client"
import React, { createContext } from 'react'
import { useTipCalculator } from '@/hooks/useTipCalculator'

type TipCalcContextType = ReturnType<typeof useTipCalculator> & {
  isTipSelected: (percentage: number) => boolean;
  onReset: () => void;
}

export const TipCalcContext = createContext<TipCalcContextType | null>(null)

const TipCalcContextProvider = ({children}: {children: React.ReactNode}) => {
  const tipCalculator = useTipCalculator();
  
  const isTipSelected = (percentage: number) => percentage === tipCalculator.selectedTip;

  const onReset = () => {
    tipCalculator.updateBillAmount('');
    tipCalculator.updateCustomTip('');
    tipCalculator.updatePeopleCount('');
    tipCalculator.updateTipSelection(0);

  }

  const value = {
    ...tipCalculator,
    isTipSelected,
    onReset,
  }

  return (
    <TipCalcContext.Provider value={value}>
      {children}
    </TipCalcContext.Provider>
  )
}

export default TipCalcContextProvider;