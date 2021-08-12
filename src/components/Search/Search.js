import React, { useRef } from "react";
import { Button } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const Search = (props) => {
  const inputEl = useRef("");
  const getSearchTerm = () => {
    props.searchKeyword(inputEl.current.value);
  };

  return (
    <form>
      <input
        ref={inputEl}
        type="text"
        placeholder="Search Contacts"
        className="prompt"
        value={props.term}
        onChange={getSearchTerm}
        style={{ height: "40px" }}
      />
      <Button>
        <SearchIcon fontSize="large" />
      </Button>
    </form>
  );
};

export default Search;
