import React from "react";

const Meal = ({ data, setBarData, toggleBar }) => {
  return (
    <React.Fragment>
      <div className="">
        <div className="card">
          <img
            onClick={() => {
                setBarData(data);
                toggleBar();
            }}
            src={data.strMealThumb}
            className="card-img cursor-pointer pe-auto"
            alt={data.strMeal}
          />
          <div className="card-body">
            {" "}
            <h5 className="card-title">{data.strMeal}</h5>
            <p className="card-text text-truncate fs-10">{data.strInstructions}</p>
            <a target={'_blank'} href={data.strYoutube} class="link-danger">
              Youtube
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Meal;
