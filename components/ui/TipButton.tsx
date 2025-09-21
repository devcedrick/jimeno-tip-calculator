import React from 'react'

interface TipButtonProps {
  percentage: number;
  isSelected: boolean;
  onTipSelect: () => void;
}

const TipButton: React.FC<TipButtonProps> = ({percentage,isSelected, onTipSelect}) => {
  return (
    <div className={`button flex items-center justify-center tip-component
      ${isSelected ? "button-active" : 'hover:bg-[#016368] hover:-translate-y-1' }`} onClick={onTipSelect}>
      {percentage}%
    </div>
  )
}

export default TipButton