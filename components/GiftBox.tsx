import React, { useState } from 'react';
import Image from 'next/image';

interface GiftBoxProps {
  onOpen: () => void;
}

const GiftBox: React.FC<GiftBoxProps> = ({ onOpen }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
    onOpen();
  };

  return (
    <div 
      className={`relative cursor-pointer transition-transform duration-500 ${
        isOpen ? 'scale-150' : 'hover:scale-110'
      }`}
      onClick={handleClick}
    >
      <Image
        src="/present-box.png"
        alt="Gift Box"
        width={400}
        height={400}
        className={`transition-opacity animate-shake duration-500 ${isOpen ? 'opacity-0' : 'opacity-100'}`}
      />
      {isOpen && (
        
          <div className="absolute inset-0 flex flex-col items-center justify-center text-4xl font-bold text-primary">
            <Image src="/present.jpeg" alt='목도리' width={200} height={200} className="rounded-lg" />
            <a href="https://kko.kakao.com/okWSE1KHQR" className="text-sm mt-4">선물 보러가기</a>
          </div>
      )}
    </div>
  );
};

export default GiftBox;

