import React from "react";

export default function Search() {
  return (
    <form id="search-form">
      <input
        type="text"
        placeholder="Type a city"
        id="city-input"
        autoComplete="off"
      />
      <input type="submit" value="Search" />
    </form>
  );
}
