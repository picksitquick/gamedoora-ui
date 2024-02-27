import { Button } from '@mui/material';
import Image from 'next/image';
import React from 'react';

interface SocialButtonProps {
  color: string;
  iconPath: string;
  socialName: string;
  onClick: () => void;
}

export default function SocialButton({ color, iconPath, socialName, onClick }: SocialButtonProps) {
  return (
    <Button
      variant="contained"
      style={{ borderRadius: '24px', backgroundColor: color,}}
      className='font-medium font-roboto h-[52px] w-[188px]'
      onClick={onClick}
    >
      <Image 
        src={`/${iconPath}`} // Assuming icons are in the 'public/icons' folder
        alt="social"
        height={20}
        width={20}
        className='mr-2'
      />
      {socialName}
    </Button>
  );
}
