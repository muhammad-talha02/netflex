import React, { useContext } from "react";
import { useGlobalContext } from "../utils/context";

const Search = () => {
  const { searchValue, setSearchValue, isError } = useGlobalContext();
  return (
    <>
      <div className="row">
        <div className="col-md-6 my-5 mx-auto">
          <input
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="form-control"
          />
          <p className="text-center text-danger my-3">
            {isError.show && isError.msg}
          </p>
        </div>
      </div>
    </>
  );
};

export default Search;
