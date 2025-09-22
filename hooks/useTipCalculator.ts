import { useState } from "react";

interface TipCalculatorState {
  billAmount: number;
  selectedTip: number;
  customTip: string;
  peopleNum: number;
}

export function useTipCalculator() {
  const [state, setState] = useState<TipCalculatorState>({
    billAmount: 0,
    selectedTip: 0,
    customTip: '',
    peopleNum: 0
  });

  const updateBillAmount = (amount: number) => {
    setState(prev => ({ ...prev, billAmount: amount }));
  };

  const updateTipSelection = (tip: number) => {
    setState(prev => ({ ...prev, selectedTip: tip, customTip: '' }));
  };

  const updateCustomTip = (tip: string) => {
    setState(prev => ({ ...prev, customTip: tip, selectedTip: 0 }));
  };

  const updatePeopleCount = (count: number) => {
    setState(prev => ({ ...prev, peopleNum: Math.max(1, count) }));
  };

  const isTipSelected = (percentage: number) => percentage === state.selectedTip;

  return{
    ...state,
    updateBillAmount,
    updateTipSelection,
    updateCustomTip,
    updatePeopleCount,
    isTipSelected,
  }
}

