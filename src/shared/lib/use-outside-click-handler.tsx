import React, { useEffect } from 'react';

export function useOutsideHandler(ref: React.MutableRefObject<HTMLElement | null>, callBack: (element: HTMLElement | null | undefined) => void) {
  useEffect(() => {
    function handleClickOutside(event: Event | null) {
      if (ref.current && !ref.current.contains(event?.target as HTMLElement)) {
        callBack(event?.target as HTMLElement);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [callBack, ref]);
}
