import React from "react";
import Movie from "./Movie";
import Masonry from "react-masonry-css";
import { Alert, Spinner } from "reactstrap";

const MovieResult = ({ movieResult, setBarData, toggleBar }) => {
  return (
    <React.Fragment>
      <div className="mt-5">
        <Masonry
          breakpointCols={3}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {(movieResult.data || []).map((item, idx) => (
            <Movie
              key={idx}
              data={item}
              setBarData={setBarData}
              toggleBar={toggleBar}
            />
          ))}
        </Masonry>
        {!movieResult.resExist && (
          <Alert color="danger">No Matched Movie Found</Alert>
        )}
        {movieResult.loading && <Spinner color="primary">Loading...</Spinner>}
      </div>
    </React.Fragment>
  );
};

export default MovieResult;
