"use client"
import { useTipCalculator } from "@/hooks/useTipCalculator";
import InputPanel from "@/components/layouts/InputPanel";
import ResultPanel from "@/components/layouts/ResultPanel";

export default function Home() {
  const {
    billAmount, peopleNum,
    updateBillAmount, updatePeopleCount,
  } = useTipCalculator();

  

  return (
    <main className="flex flex-col gap-8 items-center justify-center">
      <img className="w-max h-max max-sm:mt-32 sm:mt-18 mb-3" src="/images/logo.svg" alt="App Logo" />
      <div className="flex flex-col lg:flex-row bg-white p-8 max-lg:rounded-b-0 rounded-3xl   w-full sm:w-max relative gap-7 lg:gap-3 max-lg:min-w-[350px]">
        <InputPanel />
        <ResultPanel />
      </div>
    </main>
  );
}
