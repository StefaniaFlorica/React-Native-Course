import {useEffect, useRef, useState} from 'react';

export const useSearch = <T>(arr: T[], searchValue: string, key: keyof T) => {
  const [filteredElements, setFilteredElements] = useState<T[]>(arr);
  // const searchValueRef = useRef(searchValue);
// ca sa nu mai am stack overflow
  useEffect(() => {
    // if (searchValueRef.current !== searchValue) {
      const filtered = arr.filter((item) =>
        (item[key] as string).includes(searchValue))
      setFilteredElements(filtered);
      // searchValueRef.current = searchValue;
    // }
  }, [arr, searchValue, key]);

  return filteredElements;

};
