import React from 'react';
import dynamic from 'next/dynamic';

const ReactConfetti = dynamic(() => import('react-confetti'), { ssr: false });

interface FireworksProps {
  isActive: boolean;
}

const Fireworks: React.FC<FireworksProps> = ({ isActive }) => {
  if (!isActive) return null;

  return (
    <ReactConfetti
      width={window.innerWidth}
      height={window.innerHeight}
      recycle={false}
      numberOfPieces={400}
    />
  );
};

export default Fireworks;

