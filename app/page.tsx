import React from 'react';
import { Metadata } from 'next';
import PresentPage from '@/components/PresetPage';

export const metadata: Metadata = {
  title: '선물상자',
  description: '선물입니다 허허',
}

export default function Home() {
  return <PresentPage />
}

