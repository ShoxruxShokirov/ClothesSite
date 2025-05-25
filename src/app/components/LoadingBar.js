'use client';

import { useEffect, useState, Suspense } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export default function LoadingBarWrapper() {
  return (
    <Suspense>
      <LoadingBar />
    </Suspense>
  );
}

function LoadingBar() {
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    setLoading(true);
    setProgress(0);

    // Minimum duration for the loading animation (in milliseconds)
    const minDuration = 800;
    const startTime = Date.now();

    const timer = setInterval(() => {
      const elapsedTime = Date.now() - startTime;
      const progress = Math.min((elapsedTime / minDuration) * 100, 100);

      setProgress(progress);

      if (progress >= 100) {
        clearInterval(timer);
        setTimeout(() => {
          setLoading(false);
          setProgress(0);
        }, 200);
      }
    }, 16); // 60fps for smooth animation

    return () => {
      clearInterval(timer);
    };
  }, [pathname, searchParams]);

  if (!loading) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '3px',
        background: 'linear-gradient(to right, #ff4b4b, #ff7676)',
        transform: `scaleX(${progress / 100})`,
        transformOrigin: 'left',
        transition: 'transform 0.1s linear',
        zIndex: 9999,
      }}
    />
  );
} 