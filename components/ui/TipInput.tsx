import React from 'react'

interface TipInputProps {
  placeholder: string;
  onCustomTipChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TipInput = ({placeholder, onCustomTipChange}: TipInputProps) => {
  return (
    <input className='tip-component px-3 bg-gray-200 input' placeholder={placeholder} onChange={onCustomTipChange}
      onInput={(e) => {
        const value = e.currentTarget.value.replace(/[^0-9]/g, '');
        e.currentTarget.value = value;
      }}/>
  )
}

export default TipInput
