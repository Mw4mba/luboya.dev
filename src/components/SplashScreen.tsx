'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function SplashScreen() {
  const [stage, setStage] = useState<'initial' | 'rotate' | 'slide' | 'hidden'>('initial');

  useEffect(() => {
    // Check session storage
    const hasSeen = typeof window !== 'undefined' ? sessionStorage.getItem('hasSeenSplash') : null;

    if (hasSeen) {
      setStage('hidden');
      return;
    }

    // Start animation sequence
    const rotateTimer = setTimeout(() => {
      setStage('rotate');
    }, 500);

    const slideTimer = setTimeout(() => {
      setStage('slide');
    }, 2000);

    const hideTimer = setTimeout(() => {
      setStage('hidden');
      sessionStorage.setItem('hasSeenSplash', 'true');
    }, 2800);

    return () => {
      clearTimeout(rotateTimer);
      clearTimeout(slideTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (stage === 'hidden') return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-white dark:bg-black transition-transform duration-700 ease-in-out ${stage === 'slide' ? '-translate-y-full' : 'translate-y-0'
        }`}
    >
      <div
        className={`relative w-48 h-48 transition-transform duration-1000 ease-in-out ${stage === 'initial' ? '-rotate-45 scale-90' : 'rotate-0 scale-100'
          }`}
      >
        <div className="dark:hidden w-full h-full relative">
          <Image
            src="/lblg.svg"
            alt="Luboya Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
        <div className="hidden dark:block w-full h-full relative">
          <Image
            src="/lblgw.svg"
            alt="Luboya Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
}
