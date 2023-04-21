import {useEffect, useState} from 'react';

export const useDebounce = <T>(val: T, delay: number): T => {
  const [debVal, setDebVal] = useState<T>(val);
  useEffect(() => {
    const id = setTimeout(() => {
      setDebVal(val);
    }, delay);
    return () => clearTimeout(id); // daca se schimba una din deps, se apeleaza mai intai return
  }, [val, delay]);
  
  return debVal;
};
