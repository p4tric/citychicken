import { useState, useEffect } from 'react';

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  const [gotSmallScreen, setGotSmallScreen] = useState(false);

  useEffect(() => {
    function handleResize() {
      // console.log('[HANDLE RESIZE]');

      setWindowSize({
        width: window.screen.width,
        height: window.screen.height,
      });
    }
    // Add event listener
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const { width } = windowSize;
    if (width) {
      // console.log('[WIDTH] ', width);
      // console.log('[width <= 480] ', width <= 480);
      // console.log('[width >= 300] ', width >= 300);
      // console.log('[width <= 480 && width >= 300] ', width <= 480 && width >= 300);

      setGotSmallScreen(width <= 480 && width >= 300);
    }
  }, [gotSmallScreen, windowSize]);

  const hasMobileScreen = () => gotSmallScreen;

  // console.log('[GOT SMALL SCREEN] ', gotSmallScreen);
  // console.log('[HAS SMALL SCREEN] ', hasMobileScreen());

  return {
    windowSize,
    isMobile: hasMobileScreen(),
  };
};

export default useWindowSize;
