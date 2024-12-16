'use client'

import React, { useState } from 'react';
import GiftBox from '../components/GiftBox';
import Fireworks from '../components/Fireworks';

export default function PresentPage() {
  const [showFireworks, setShowFireworks] = useState(false);

  const handleGiftOpen = () => {
    setShowFireworks(true);
    setTimeout(() => setShowFireworks(false), 5000); // 5초 후 폭죽 효과 종료
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-primary to-secondary p-24">
      <h1 className="mb-8 text-4xl font-bold text-primary-foreground">선물을 열어보세요!</h1>
      <GiftBox onOpen={handleGiftOpen} />
      <Fireworks isActive={showFireworks} />
    </main>
  );
}

