import React, { useState } from "react";
import {
  Button,
  Offcanvas,
  OffcanvasBody,
  OffcanvasHeader,
  Tooltip,
} from "reactstrap";

const MovieBar = ({ isBarOpen, toggleBar, data }) => {
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const toggle = () => setTooltipOpen(!tooltipOpen);
  return (
    <React.Fragment>
      <div>
        <Offcanvas isOpen={isBarOpen} toggle={toggleBar} direction="end">
          <OffcanvasHeader className="text-danger" toggle={toggleBar}>
            {data?.Title}
          </OffcanvasHeader>
          <OffcanvasBody>
            <div className="d-flex justify-content-around flex-wrap">
                <h4
                  id="imdb-rating-tooltip"
                  className="text-capitalize p-3"
                >
                  {data?.imdbRating} ⭐
                </h4>
              <Tooltip
                isOpen={tooltipOpen}
                target="imdb-rating-tooltip"
                toggle={toggle}
              >
                IMDB Rating
              </Tooltip>
            </div>
            <div class="text-danger">
              <hr />
            </div>

            <p className="text-capitalize rounded-pill">{data?.Plot}</p>
            <h4 className="fs-9">Actors:</h4>
            <p className="text-capitalize rounded-pill">{data?.Actors}</p>

            <h4 className="fs-9">Awards:</h4>
            <p className="text-capitalize rounded-pill">{data?.Awards}</p>

            <h4 className="fs-9">Box Office:</h4>
            <p className="text-capitalize rounded-pill">{data?.BoxOffice}</p>

            <h4 className="fs-9">Director:</h4>
            <p className="text-capitalize rounded-pill">{data?.Director}</p>

            <h4 className="fs-9">Released:</h4>
            <p className="text-capitalize rounded-pill">{data?.Released}</p>

            <h4 className="fs-9">Writer:</h4>
            <p className="text-capitalize rounded-pill">{data?.Writer}</p>
            {/* <div className="text-success">
              <hr />
            </div>
            <h4 className="fs-9">Youtube:</h4>
            <a target={"_blank"} href={data?.strYoutube} className="link-danger">
              {data?.strYoutube}
            </a> */}
          </OffcanvasBody>
        </Offcanvas>
      </div>
    </React.Fragment>
  );
};

export default MovieBar;
