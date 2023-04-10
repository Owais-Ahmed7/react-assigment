import React from "react";

const Pokemon = ({ data, setBarData, toggleBar }) => {
  return (
    <React.Fragment>
      <div className="">
        <div className="card">
          <img
            onClick={() => {
              setBarData(data);
              toggleBar();
            }}
            src={data.sprites.back_default}
            className="card-img cursor-pointer pe-auto"
            alt={data.strMeal}
          />
          <div className="card-body border-top">
            {" "}
            <div className="d-flex justify-content-around">
              <h5 className="card-title text-primary">{data.id}</h5>
              <h5 className="card-title text-bold fs-4 text-primary">{data.name}</h5>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Pokemon;
