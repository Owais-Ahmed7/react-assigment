import React from "react";
import Meal from "./Meal";
import Masonry from "react-masonry-css";
import { Alert, Spinner } from "reactstrap";

const Meals = ({ meals, setBarData, toggleBar }) => {
  return (
    <React.Fragment>
      <div className="mt-5">
        <Masonry
          breakpointCols={3}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {(meals.data || []).map((item, idx) => (
            <Meal
              key={idx}
              data={item}
              setBarData={setBarData}
              toggleBar={toggleBar}
            />
          ))}
        </Masonry>
        {!meals.resExist && (
          <Alert color="danger">No Meals Found</Alert>
        )}
        {meals.loading && <Spinner color="primary">Loading...</Spinner>}
      </div>
    </React.Fragment>
  );
};

export default Meals;
