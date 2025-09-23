import { useState } from "react";

interface TipCalculatorState {
  billAmount: string;
  selectedTip: number;
  customTip: string;
  peopleNum: string;
}

export function useTipCalculator() {
  const [state, setState] = useState<TipCalculatorState>({
    billAmount: '',
    selectedTip: 0,
    customTip: '',
    peopleNum: ''
  });

  const updateBillAmount = (amount: string) => {
    setState(prev => ({ ...prev, billAmount: amount }));
  };

  const updateTipSelection = (tip: number) => {
    setState(prev => ({ ...prev, selectedTip: tip, customTip: '' }));
  };

  const updateCustomTip = (tip: string) => {
    setState(prev => ({ ...prev, customTip: tip, selectedTip: 0 }));
  };

  const updatePeopleCount = (count: string) => {
    setState(prev => ({ ...prev, peopleNum: count }));
  };

  return{
    ...state,
    updateBillAmount,
    updateTipSelection,
    updateCustomTip,
    updatePeopleCount,
  }
}

