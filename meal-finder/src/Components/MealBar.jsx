import React from "react";
import { Button, Offcanvas, OffcanvasBody, OffcanvasHeader } from "reactstrap";

const d = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30,
];

const MealBar = ({ isBarOpen, toggleBar, data }) => {
  return (
    <React.Fragment>
      <div>
        <Offcanvas isOpen={isBarOpen} toggle={toggleBar} direction="end">
          <OffcanvasHeader toggle={toggleBar}>{data?.strMeal}</OffcanvasHeader>
          <OffcanvasBody>
            <h4 className="fs-9">Category: {data?.strCategory}</h4>
            <div class="text-success">
              <hr />
            </div>
            <h4 className="fs-9">Recipe:</h4>
            <p className="text-muted">{data?.strInstructions}</p>
            <div class="text-success">
              <hr />
            </div>
            <h4 className="fs-9">Ingredients:</h4>
            {(d || []).map((item, idx) => (data && data[`strIngredient${item}`]) &&  <span className="me-2">{data[`strIngredient${item}`]},</span>)}
       
            <div class="text-success">
              <hr />
            </div>
            <h4 className="fs-9">Youtube:</h4>
            <a target={'_blank'} href={data?.strYoutube} class="link-danger">
              {data?.strYoutube}
            </a>
          </OffcanvasBody>
        </Offcanvas>
      </div>
    </React.Fragment>
  );
};

export default MealBar;
