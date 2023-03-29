import { useState, useEffect } from 'react';

function useDeviceImageWidth() {
  const [deviceImageWidth, setDeviceImageWidth] = useState('original');

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth <= 300) {
        setDeviceImageWidth('w300');
      } else if (windowWidth > 300 && windowWidth <= 780) {
        setDeviceImageWidth('w780');
      } else if (windowWidth > 780 && windowWidth <= 1280) {
        setDeviceImageWidth('w1280');
      } else {
        setDeviceImageWidth('original');
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return deviceImageWidth;
}

export default useDeviceImageWidth;
