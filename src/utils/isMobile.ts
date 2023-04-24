import { useLayoutEffect, useState } from 'react';

export const MAX_MOBILE_WIDTH = 700;

export function useIsMobile(): boolean {
  const [ isMobile, setIsMobile ] = useState(false);
  useLayoutEffect(() => {
    function updateSize() {
      setIsMobile(window.innerWidth <= MAX_MOBILE_WIDTH);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return isMobile;
}
