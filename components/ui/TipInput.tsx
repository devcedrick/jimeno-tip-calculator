import React from 'react'

interface TipInputProps {
  placeholder: string;
  onCustomTipChange: (value: string) => void;
  value: string;
}

const TipInput = ({placeholder, value, onCustomTipChange}: TipInputProps) => {
  return (
    <input className='tip-component px-3 bg-gray-200 input' placeholder={placeholder} value={value} onChange={ (e) => {
      const value = e.currentTarget.value.replace(/[^0-9]/g, '');
      onCustomTipChange(value);
      }
    } />
  )
}

export default TipInput
