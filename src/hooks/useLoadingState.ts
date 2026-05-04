import { useState, useEffect } from 'react';

export const useLoadingState = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isContentReady, setIsContentReady] = useState(false);

  useEffect(() => {
    // Track page load progress
    let progress = 0;
    const progressInterval = setInterval(() => {
      progress += Math.random() * 10;
      if (progress >= 100) {
        progress = 100;
        setLoadingProgress(100);
        clearInterval(progressInterval);
        
        // Wait for content to be fully ready
        setTimeout(() => {
          setIsContentReady(true);
          
          // Additional delay after 100% loading
          setTimeout(() => {
            setIsLoading(false);
          }, 800);
        }, 500);
      } else {
        setLoadingProgress(Math.round(progress));
      }
    }, 200);

    return () => clearInterval(progressInterval);
  }, []);

  return { isLoading, loadingProgress, isContentReady };
};
