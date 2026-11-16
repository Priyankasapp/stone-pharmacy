import React from 'react'
export interface GradientProps {
  className?: string;
}

const BgGradient = ({ className = "" }: GradientProps) => {
  return (
    <div
      className={`
        ${className}
        z-0 pointer-events-none absolute w-[1200px] h-[680px]
        inset-x-0 top-[-648px] opacity-[0.2] rotate-20
        blur-[150px]
      `}
      style={{
        background:
          "linear-gradient(90deg, #EFE9B0 0%, #ABEAE8 50%, #BBC0FE 100%)",
      }}
    />
  );
};


const SkinGradient = ({ className = "" }: GradientProps) => {
  return (
    <div
      className={`
        ${className}
        z-0 pointer-events-none absolute w-[1000px] h-[680px]
        bg-[#EFE9B0]/50 blur-[40px]
      `}
    />
  );
};


const BlueGradient = ({ className = "" }: GradientProps) => {
  return (
    <div
      className={`
        ${className}
        z-0 pointer-events-none absolute w-[1000px] h-[680px]
        bg-[#ABEAE8]/30 blur-[40px]
      `}
    />
  );
};


const PurpleGradient = ({ className = "" }: GradientProps) => {
  return (
    <div
      className={`
        ${className}
        z-0 pointer-events-none absolute w-[1200px] h-[680px]
        bg-[#BBC0FE] blur-[40px]
      `}
    />
  );
};


const WhiteGradient = ({ className = "" }: GradientProps) => {
  return (
    <div
      className={`
        ${className}
        z-0 pointer-events-none absolute w-[1200px] h-[1000px]
        bg-white blur-[40px]
      `}
    />
  );
};

export {
  BgGradient,
  SkinGradient,
  BlueGradient,
  PurpleGradient,
  WhiteGradient,
};