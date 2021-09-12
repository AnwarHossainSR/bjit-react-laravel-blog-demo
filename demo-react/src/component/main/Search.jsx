import React, { useState,useEffect } from "react";
import { useHistory } from "react-router";

const Search = () => {
  const [search, setSearch] = useState( '' )
  const histry = new useHistory();
  useEffect(() => {
    //histry.push(`/search/${search}`)
  }, [search])
  const HandleSubmit = ( e ) => {
    e.preventDefault();
    histry.push(`/search/${search}`)
    
   }
  return (
    <div className="section search">
      <h2 className="section-title">Search</h2>
      <form onSubmit={HandleSubmit}>
        <input
          type="text"
          name="search-term"
          className="text-input"
          defaultValue={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search..."
        />
      </form>
    </div>
  );
};

export default Search;
