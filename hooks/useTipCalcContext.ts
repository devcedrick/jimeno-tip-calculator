import { useContext } from "react";
import {TipCalcContext} from "@/context/TipCalcContext";

export const useTipCalcContext = () => {
  const context = useContext(TipCalcContext);
  if (context === null) {
    throw new Error('useTipCalcContext must be used within a TipCalcContextProvider');
  }
  return context;
}