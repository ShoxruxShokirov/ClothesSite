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

function LoadingBar({
  height = 4,
  gradient = 'linear-gradient(90deg, #2196f3 0%, #21cbf3 100%)',
  boxShadow = '0 2px 8px 0 rgba(33, 150, 243, 0.15)',
  borderRadius = 3,
  opacity = 0.95,
}) {
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    setLoading(true);
    setProgress(0);
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
    }, 16);
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
        height: height,
        background: gradient,
        boxShadow: boxShadow,
        borderRadius: borderRadius,
        opacity: opacity,
        transform: `scaleX(${progress / 100})`,
        transformOrigin: 'left',
        transition: 'transform 0.2s cubic-bezier(0.4,0,0.2,1)',
        zIndex: 9999,
        pointerEvents: 'none',
      }}
    />
  );
} 