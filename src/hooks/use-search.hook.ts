import {useEffect, useState} from 'react';

export const useSearch = <T>(arr: T[], searchValue: string, key: keyof T) => {
    const[array,setArray] = useState<T[]>([]);
  useEffect(() => {
    const filteredArray = arr.filter((item: T) => item[key] === searchValue);
    setArray(filteredArray)
  });
  return array;
};
