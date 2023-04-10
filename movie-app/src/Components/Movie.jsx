import React from "react";

const Movie = ({ data, setBarData, toggleBar }) => {
  return (
    <React.Fragment>
      <div className="">
        <div className="card">
          <img
            onClick={() => {
              setBarData(data);
              toggleBar();
            }}
            src={data.Poster}
            className="card-img cursor-pointer pe-auto"
            alt={data.Title}
          />
          <div className="card-body border-top mt-3">
            {" "}
            <div>
              <p>{data.imdbRating} ⭐</p>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="card-title text-bold fs-4 text-primary">
                {data.Title}
              </h5>
              <h6 className="text-muted">{data.Released}</h6>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Movie;
