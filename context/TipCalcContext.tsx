"use client"
import React, { createContext } from 'react'
import { useTipCalculator } from '@/hooks/useTipCalculator'

export const TipCalcContext = createContext<ReturnType<typeof useTipCalculator > | null>(null)

const TipCalcContextProvider = ({children}: {children: React.ReactNode}) => {
  const {billAmount, updateBillAmount} = useTipCalculator();
  const {selectedTip, updateTipSelection} = useTipCalculator();
  const {customTip, updateCustomTip} = useTipCalculator();
  const {peopleNum, updatePeopleCount} = useTipCalculator();
  const {isTipSelected} = useTipCalculator();

  const value = {
    billAmount,
    updateBillAmount,
    selectedTip,
    updateTipSelection,
    customTip,
    updateCustomTip,
    peopleNum,
    updatePeopleCount,
    isTipSelected
  }

  return (
    <TipCalcContext.Provider value={value}>
      {children}
    </TipCalcContext.Provider>
  )
}

export default TipCalcContextProvider;
