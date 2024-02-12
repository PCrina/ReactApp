import { useEffect, useRef } from "react";

export default function SearchBar({ query, setQuery }) {
  //1. create a ref and pass in the initial value, when work with DOM elem usually the initial value is null
  const inputElem = useRef(null);

  //3. use ref into useEffect hook
  useEffect(
    function () {
      //create a focus on the search bar
      function callback(e) {
        if (document.activeElement === inputElem.current) return;

        if (e.code === "Enter") {
          inputElem.current.focus();
          setQuery("");
        }
      }

      document.addEventListener("keydown", callback);
      return () => document.addEventListener("keydown", callback);
    },
    [setQuery]
  );

  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      //2. ref that will contain the input element ref created al line 5
      ref={inputElem}
    />
  );
}
