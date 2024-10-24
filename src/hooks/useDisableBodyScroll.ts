import React from 'react';

function useDisableBodyScroll(enabled = true) {
   React.useEffect(() => {
      if (enabled) {
         document.body.style.overflow = 'hidden';
      }
      return () => {
         document.body.style.overflow = 'unset';
      };
   }, [enabled]);
}

export default useDisableBodyScroll;
