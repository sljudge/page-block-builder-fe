import { useEffect, useRef, useState } from 'react';

/**
 * @param threshold - number out of 10 to determine when element is visible
 */
export function useIntersectionObserver(threshold = 3) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const elem = ref.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // get the amount of the screen taken up by the section (to 1dp)
          // we need to subtract the header
          if (!isVisible) {
            setIsVisible(Math.round(entry.intersectionRatio * 10) > threshold);
          }
        });
      },
      {
        rootMargin: '-175px 0px 0px 0px',
        threshold: [0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0]
      }
    );
    if (elem) observer.observe(elem);
    return () => {
      if (elem) observer.unobserve(elem);
    };
  }, [isVisible, threshold]);

  return { ref, isVisible };
}
