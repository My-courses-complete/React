import React from "react";
import {TodoContext} from "../context/TodoContext";
import "../styles/TodoSearch.css";

function TodoSearch({ searchValue, setSearchValue}) {
  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };
  return (
    <input
      className="TodoSearch"
      placeholder="write a word"
      value={searchValue}
      onChange={onSearchValueChange}
    />
  );
}

export { TodoSearch };
