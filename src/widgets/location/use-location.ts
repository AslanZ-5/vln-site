import { useCallback, useState } from "react";

export const useLocation = () => {
  const [ locationModalOpened, setLocationModalOpened ] = useState(false)
  const [ location, setLocation ] = useState('Симферополь');

  const handleLocationModalOpen = useCallback(() => { 
    setLocationModalOpened(true) 
  }, []);

  const handleLocationModalClose = useCallback(() => { 
    setLocationModalOpened(false) 
  }, []);
  
  const handleSetLocation = useCallback((location: string) => {
    setLocation(location)
  }, []);

  return {
    locationModalOpened,
    location,
    handleLocationModalOpen,
    handleLocationModalClose,
    handleSetLocation
  }
}
