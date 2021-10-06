import React, { useState } from "react";

const Search = ({ searched }) => {
  const [inputed, setInputed] = useState("");

  const onSearch = (e) => {
    setInputed(e);
    searched(e);
  };

  return (


    <input
      type="text"
      placeholder="Search your character"
      autoFocus
      onChange={(e) => onSearch(e.target.value)}
      value={inputed}
    />


  );
};

export default Search;
