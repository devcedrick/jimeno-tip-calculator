import React, { useState } from 'react'

interface InputProps{
  placeholder: string;
  imgSrc: string;
  allowFloatingNum: boolean;
  allowZero: boolean
}

const Input = ({placeholder, imgSrc, allowFloatingNum, allowZero}: InputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasError, setHasError] = useState(false);

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

    if(!allowZero && parseInt(e.target.value) === 0) {
        setHasError(true);
      } else {
        setHasError(false);
      }

  };

  return (
    <div className={`flex flex-row items-center bg-gray-200 w-full h-12 text-xl lg:text-2xl rounded-md  text-right font-semibold text-(--secondary-color) ${isFocused ? (hasError ? 'input-error-focus' : 'input-focus') : ''} relative`}>
      {
        hasError ? <p className='text-red-400 absolute -top-8 right-0 text-base'>Can't be zero</p> : <></>
      }
      <img src={imgSrc} alt="Dollar Sign" className='aspect-square w-4 ml-5'/>
      <input className='w-full h-full text-right focus:outline-0 px-5' placeholder={placeholder} 
        onFocus={() => {setIsFocused(true)}} 
        onBlur={() => {
          if (hasError) setIsFocused(true)
          else setIsFocused(false);
          } 
        }
        onInput={handleInputChange} />
    </div>
  )
}

export default Input
