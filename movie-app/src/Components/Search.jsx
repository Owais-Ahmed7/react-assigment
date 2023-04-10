import React, { useState } from "react";

const Search = ({ setName, setMovieResult }) => {
  const [value, setValue] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (value) {
          setName(value);
        }
      }}
      action="#"
    >
      <div className="d-flex align-items-center">
        <input
          class="form-control form-control-sm border-danger"
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Search by name or id..."
          aria-label=".form-control-sm example"
          autoComplete='on'
        />
        <button
          className="btn btn-primary btn-outline btn-sm ms-3"
          type="submit"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default Search;
