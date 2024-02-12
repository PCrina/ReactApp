import { useEffect, useState } from "react";
export default function useLocalStorageState(initialState, key) {
  const [value, setValue] = useState(function () {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialState;
  });

  //when a move is added to whatched list, useEffect is triggered and store the movie into the local storage
  useEffect(
    function () {
      //"watched" - is the key into local storage
      localStorage.setItem(key, JSON.stringify(value));
    },
    [value, key]
  );

  return [value, setValue];
}
