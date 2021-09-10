import React from "react";

const Search = () => {
  return (
    <div className="section search">
      <h2 className="section-title">Search</h2>
      <form action="index.html" method="post">
        <input
          type="text"
          name="search-term"
          className="text-input"
          placeholder="Search..."
        />
      </form>
    </div>
  );
};

export default Search;
