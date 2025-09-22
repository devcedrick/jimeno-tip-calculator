import React, { useState } from 'react'

interface InputProps{
  placeholder: string;
  imgSrc: string;
  allowFloatingNum: boolean;
}

const Input = ({placeholder, imgSrc, allowFloatingNum}: InputProps) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;          
    
    if (allowFloatingNum) {
      const filtered = value.replace(/[^0-9.]/g, '');
      
      const parts = filtered.split('.');
      
      let finalValue;
      if (parts.length > 2) {
        finalValue = parts[0] + '.' + parts.slice(1).join('');
      } else {
        finalValue = filtered;
      }
      
      e.target.value = finalValue;
    } else {
      const filtered = value.replace(/[^0-9]/g, '');
      e.target.value = filtered;
    }
  };

  return (
    <div className={`flex flex-row items-center bg-gray-200 w-full h-12 text-xl lg:text-2xl rounded-md px-5 text-right font-semibold text-(--secondary-color) ${isFocused ? 'input-focus' : ''}`}>
      <img src={imgSrc} alt="Dollar Sign" className='aspect-square w-4'/>
      <input className='flex-1 text-right focus:outline-0' placeholder={placeholder} onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)} onInput={handleInputChange} />
    </div>
  )
}

export default Input
