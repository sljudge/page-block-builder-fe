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
          if (!isVisible && entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        rootMargin: '-175px 0px 0px 0px',
        threshold: threshold / 10
      }
    );
    if (elem) observer.observe(elem);
    return () => {
      if (elem) observer.unobserve(elem);
    };
  }, [isVisible, threshold]);

  return { ref, isVisible };
}
