

import { ButtonType } from '@/lib/types'
import React from 'react'

const Button = ({ className, children }: ButtonType) => {
    return (
        <button
            className={`${className ?? ''} h-full max-h-[40px] w-full max-w-[170px] rounded-12 font-poppins flex items-center text-[18px] font-[600] justify-center text-ice-blue  py-[10px] px-[24px] bg-[linear-gradient(180deg,#3E3D3E_0%,#403E40_79.91%,#5E5D5E_100%)] rounded-[12px] cursor-pointer border-2 border-black gap-8
            `}
        >
            {children}
        </button>
    )
}

export default Button

export const Button2 = ({ className, children }: ButtonType) => {
    return (
        <div className='rounded-xl bg-gradient-to-r from-[#E1E1E1] to-[#ADADAD] p-[1px]'>
            <button
                type="button"
                className={`${className ?? ''}
                w-full rounded-xl bg-[#FEFEFE] px-[24px] py-[10px] cursor-pointer hover:bg-neutral-50 transition-colors`}
            >
                {children}
            </button>
        </div>
    )
}

