"use client"
import { cn } from '@/lib/utils';
import React from 'react'
interface ThemeButtonProps{
    containerStyles?: string;
    renderComponent?: () => React.ReactNode;
    onClick?: () => void;
}

const ThemeButton = ({containerStyles,renderComponent,onClick=() => {}}: ThemeButtonProps) => {
  return (
    <div onClick={onClick} className={
        cn(
            'py-4 px-[55px] rounded-full bg-[#0000A3] text-white cursor-pointer',
            containerStyles
        )
    }>
      {renderComponent?.()} {/* Use optional chaining to safely call the function */}
    </div>
  )
}

export default React.memo(ThemeButton);
