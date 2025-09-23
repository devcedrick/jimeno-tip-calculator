import React, { useState } from 'react'

interface InputProps{
  placeholder: string;
  imgSrc: string;
  value: string
  allowFloatingNum: boolean;
  allowZero: boolean;
  onChange: (value: string) => void;
}

const Input = ({placeholder, imgSrc, allowFloatingNum, value, allowZero, onChange}: InputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = e.target.value;
    
    if (allowFloatingNum) {
      inputValue = inputValue.replace(/[^0-9.]/g, '');
      const parts = inputValue.split('.');
      if (parts.length > 2) {
        inputValue = parts[0] + '.' + parts.slice(1).join('');
      }
    } else {
      inputValue = inputValue.replace(/[^0-9]/g, '');
    }

    e.target.value = inputValue;
    const numValue = inputValue === '' ? 0 : parseFloat(inputValue);
    
    if (!allowZero && numValue === 0) {
      setHasError(true);
    } else {
      setHasError(false);
      onChange(e.target.value);
    }
  };

  return (
    <div className={`flex flex-row items-center bg-gray-200 w-full h-12 text-xl lg:text-2xl rounded-md  text-right font-semibold text-(--secondary-color) ${isFocused ? (hasError ? 'input-error-focus' : 'input-focus') : ''} relative`}>
      {
        hasError ? <p className='text-red-400 absolute -top-8 right-0 text-base'>Can't be zero</p> : <></>
      }
      <img src={imgSrc} alt="Dollar Sign" className='aspect-square w-4 ml-5'/>
      <input className='w-full h-full text-right focus:outline-0 px-5' placeholder={placeholder}
      value={value}
        onFocus={() => {setIsFocused(true)}} 
        onBlur={() => {
          if (hasError) setIsFocused(true)
          else setIsFocused(false);
          } 
        }
        onChange={handleInputChange}/>
    </div>
  )
}

export default Input
