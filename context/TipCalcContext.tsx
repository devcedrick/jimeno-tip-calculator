"use client"
import React, { createContext } from 'react'
import { useTipCalculator } from '@/hooks/useTipCalculator'

export const TipCalcContext = createContext<ReturnType<typeof useTipCalculator> | null>(null)

const TipCalcContextProvider = ({children}: {children: React.ReactNode}) => {
  const tipCalculator = useTipCalculator();
  
  const isTipSelected = (percentage: number) => percentage === tipCalculator.selectedTip;

  const value = {
    ...tipCalculator,
    isTipSelected
  }

  return (
    <TipCalcContext.Provider value={value}>
      {children}
    </TipCalcContext.Provider>
  )
}

export default TipCalcContextProvider;