import NetInfo from '@react-native-community/netinfo';
import {useEffect, useState} from 'react';
export const useNetinfo = () => {
  const [isConnected, setIsConnected] = useState<boolean | null>(false);
  
  useEffect(() => {
    const unsub = NetInfo.addEventListener(state => {
      const value = state.isConnected && state.isInternetReachable;
      setIsConnected(value);
    });
    return () => unsub();
  });
  
  return isConnected;
};
