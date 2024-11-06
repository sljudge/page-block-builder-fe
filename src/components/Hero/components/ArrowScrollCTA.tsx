'use client';

import { ArrowDownIcon } from '@heroicons/react/24/solid';

export const ArrowScrollCTA = () => {
  const handleClick = () => {
    window.scroll({ top: window.innerHeight });
  };
  return (
    <button
      data-testid="arrow-scroll-cta"
      className="rounded-full bg-secondary/90 p-xs"
      onClick={handleClick}
    >
      <ArrowDownIcon className="text-cta" width={32} height={32} />
    </button>
  );
};
